"use client";

import { useState } from "react";

export default function Page() {
  const [resizedImage, setResizedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const maxWidth = 960;
        const maxHeight = 540;

        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const widthRatio = maxWidth / width;
          const heightRatio = maxHeight / height;
          const ratio = Math.min(widthRatio, heightRatio);
          width = width * ratio;
          height = height * ratio;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        setResizedImage(canvas.toDataURL("image/jpeg", 0.9));
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setResizedImage(null);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">画像リサイズアプリ Resizer</h1>
      <p className="mb-4">画像を960x540以下に縮小できます。</p>

      <div className="mb-4 p-2 border-2 border-blue-500 rounded">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="cursor-pointer"
        />
      </div>

      {resizedImage && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold mb-2">リサイズ結果</h2>
          <img
            src={resizedImage}
            alt="Resized"
            className="border rounded shadow mb-4 max-w-full"
          />
          <div className="flex justify-center gap-4">
            <a
              href={resizedImage}
              download="resized-image.jpg"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              ダウンロード
            </a>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              削除・やり直し
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
