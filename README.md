# Resizer
<img width="517" height="353" alt="スクリーンショット 2025-08-29 16 43 06" src="https://github.com/user-attachments/assets/b2b8f5cc-7ee5-4adf-8478-96356c3eaaaa" />

『画像を960x540以下にリサイズできるシンプルWebアプリ』

---

## 紹介(日本語版・The English version follows below the Japanese version.)
Resizerは、画像をアップロードすると自動で960×540以内に縮小し、ダウンロードできるWebアプリです。  
処理はすべてブラウザ内（クライアントサイド）で完結するため、安全かつ高速に利用できます。  
Next.jsとTailwind CSSを用いて実装しました。  

---

## 機能
- アップロードした画像を自動で960×540以内に縮小  
- 縦横比を維持してリサイズ  
- ワンクリックでダウンロード  
- サーバーに画像を保存せずブラウザ内で処理  

---

## 作ったきっかけ
授業で提出するスクリーンショットが **960×540以下でないとアップロードできない** という制約があり、  
画像のサイズ調整に毎回時間がかかってしまっていました。  
「もっと手軽にリサイズできたらいいのに」という想いから、このWebアプリを作りました。  

課題提出だけでなく、SNS投稿や資料作成でも役立つと思い、シンプルなUIと安全設計にこだわっています。
ぜひ、多くの方に使っていただけると嬉しいです。

---

## 使用技術
- Next.js  
- React  
- Tailwind CSS  

---

## 公開URL
https://resizer-mahirok.vercel.app

---
## 制作サポート
このWebアプリは、ChatGPTやGitHub CopilotといったAIツールのサポートを受けながら開発しました。  
コードの雛形やエラーの解決にAIを活用しつつ、自分自身で理解・修正を重ねながら完成させています。

# Resizer Introduce (English ver.)

A simple web app to resize images to **960×540 or smaller**.

---

## Introduction(English version)
Resizer is a web application that automatically resizes uploaded images to fit within 960×540 pixels, while keeping the aspect ratio.  
All processing is done client-side in the browser, ensuring both **safety** and **speed**.  
It was built with **Next.js, React, and Tailwind CSS**.  

---

## Features
- Automatically resize uploaded images to fit within 960×540  
- Preserve aspect ratio  
- One-click download of resized images  
- Safe: no server storage, all processing happens inside the browser  

---

## Motivation
In my university classes, I often had to submit screenshots with a strict requirement:  
**images had to be 960×540 or smaller**.  

Resizing them manually every time was frustrating and time-consuming.  
That experience motivated me to create **Resizer** — a tool that instantly resizes images for submission.  

This app is not only helpful for school work, but also for preparing images for social media posts and documents.  
I focused on keeping the interface simple and the processing safe.  

---

## Development Support
This project was developed with the assistance of AI tools such as **ChatGPT** and **GitHub Copilot**.  
I used AI for scaffolding and debugging, while making my own adjustments and improvements to complete the project.  
Through this process, I deepened my understanding of both coding and web deployment.  

---

## Tech Stack
- Next.js  
- React  
- Tailwind CSS  

---

## Live Demo
https://resizer-kohl.vercel.app/


---
