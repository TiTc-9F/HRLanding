# Landing page 循環短片

這個資料夾放循環播放的短片（`.mp4`）。**檔名跟 `app/assets/images/` 裡的照片同名**，放進來就會在那個位置取代照片播放：

- 只在看得到時播放（靜音、循環），捲出畫面就暫停
- 同名照片當封面，影片載入前、或使用者開啟「減少動態」時顯示封面
- 產品畫面不用拍進影片：頁面上已經疊了 HTML 做的產品畫面，而且有動畫。影片裡的螢幕只要是模糊、看不清楚的介面就好

## 為什麼用 mp4、不用 GIF

畫面相同時，GIF 的檔案大 5～10 倍，而且只有 256 色，膚色和漸層會出現色帶。mp4 設成靜音循環後，看起來跟 GIF 一樣會自己播。如果手上已經是 GIF 也可以給我，我會轉成 mp4。

## 怎麼產

1. 用 Sora（ChatGPT 付費方案）、Google Veo、Runway 或 Kling 都可以；下面的 prompt 是英文，每個工具都通用
2. 一次貼一段，比例照每段寫的選
3. 長度 5～8 秒、一鏡到底不剪接、不要聲音、1080p 以上；選頭尾畫面最接近的那一支，循環時才不會跳一下
4. 下載原檔、照檔名存進這個資料夾。我會壓縮（目標每支 2 MB 以內）並截第一格當封面

## 共同風格（已經寫進每段 prompt）

- 真實攝影，跟客戶案例的三張頭像一致：暖色自然光、安靜的辦公室、像紀錄片而不是擺拍
- 人物：東亞與東南亞的成年人，20 多歲到 40 多歲
- 服裝與道具：炭黑、白、米色、淡蜜桃，點綴一個萊姆黃的小東西（杯子、筆記本）
- 不要：畫面上的文字、logo、浮水印、看得清楚的螢幕內容

建議先做 1、2，效果最明顯；3～5 是產品特色區的背景，有餘力再做。

---

## 1. `people-band.mp4`：平台全貌下方的大圖（會疊白色標語）

- 比例：**16:9（橫式）**
- 頁面顯示：全寬大圖，捲動時有視差；下方約三分之一會疊白色大字

```
Photorealistic cinematic video, 16:9, 6 seconds, one continuous shot, no cuts. A bright, modern open-plan office with warm natural afternoon light through large windows and a few plants. A team of five East and Southeast Asian colleagues, late 20s to 40s, gathered around a shared table, laughing and talking naturally; one points at a laptop while the others lean in. Wardrobe in charcoal, white, beige and soft peach, with one small lime-yellow accent such as a mug or a notebook. Camera: slow, smooth lateral dolly from left to right at eye level, shallow depth of field. Keep the people in the upper two thirds of the frame; the bottom third should be the tabletop and soft out-of-focus foreground, because white text will be placed there. Laptop screens show only soft, blurred, unreadable interfaces. Natural, slightly warm color grading, documentary feel, not staged. The last frame should closely match the first frame so the clip loops seamlessly. No text, no logos, no watermarks, no audio.
```

## 2. `hero-one-on-one.mp4`：首屏主圖

- 比例：**9:16（直式）**
- 頁面顯示：裁成接近 5:6 的直式框，上下會被裁掉一些；左下、右下各疊一張產品小卡

```
Photorealistic cinematic video, vertical 9:16, 6 seconds, one continuous shot, no cuts. A one-on-one conversation between a team lead and a team member at a small round table by a window in a calm, warm office. Both are East Asian adults, one in their 40s and one in their late 20s; the lead listens and nods, the team member talks and smiles. A laptop and two coffee cups on the table, a soft peach cushion on a chair. Wardrobe: charcoal knit, white shirt, beige trousers. Camera: very slow push-in at eye level, 50mm look, shallow depth of field. Keep both faces in the middle of the frame, between 25% and 60% of the height from the top, and away from the bottom corners, because the page crops the top and bottom and places small cards over the lower corners. Soft natural daylight, warm neutral color grading. The last frame should closely match the first frame so the clip loops seamlessly. No text, no logos, no watermarks, no audio.
```

## 3. `showcase-configure.mp4`：產品特色「自訂評估流程」

- 比例：**16:9（橫式）**
- 頁面顯示：裁成 4:3，左右會被裁掉一些；**左下半部**會疊產品畫面

```
Photorealistic video, 16:9, 6 seconds, one continuous shot, no cuts. An HR manager, an East Asian woman in her 30s in a white blouse and charcoal blazer, sits at a light wooden desk by a window, calmly working on her laptop, then leans back slightly and smiles, satisfied. Bright, quiet office with plants and warm daylight. Camera: slow push-in, shallow depth of field. Keep her face and upper body in the upper right part of the frame, and keep the lower left half calm and uncluttered, because a product interface will be placed over it. The laptop screen is blurred and unreadable. The last frame should closely match the first frame so the clip loops seamlessly. No text, no logos, no watermarks, no audio.
```

## 4. `showcase-routing.mp4`：產品特色「自動指派」

- 比例：**16:9（橫式）**
- 頁面顯示：裁成 4:3；**右下半部**會疊產品畫面

```
Photorealistic video, 16:9, 6 seconds, one continuous shot, no cuts. Two senior engineers review work together on a large monitor in a small meeting room: an East Asian man in his 40s with thin glasses explains, and a Southeast Asian woman in her 30s nods and takes a short note. Warm daylight, glass walls, a plant, a lime-yellow notebook on the table. Camera: slow lateral drift, shallow depth of field. Keep their faces in the upper left part of the frame, and keep the lower right half calm and uncluttered, because a product interface will be placed over it. The monitor shows only soft, blurred, unreadable shapes. The last frame should closely match the first frame so the clip loops seamlessly. No text, no logos, no watermarks, no audio.
```

## 5. `showcase-payroll.mp4`：產品特色「出勤到薪資」

- 比例：**16:9（橫式）**
- 頁面顯示：裁成 4:3；**左下半部**會疊產品畫面

```
Photorealistic video, 16:9, 6 seconds, one continuous shot, no cuts. An HR operations specialist, a Southeast Asian man in his 30s in a beige overshirt, sits at a tidy desk at the end of the month; he checks his laptop, ticks one item on a paper checklist, then sits back with a relaxed smile. Calm office, late afternoon warm light, a coffee cup and a small plant. Camera: slow push-in, shallow depth of field. Keep his face and upper body in the upper right part of the frame, and keep the lower left half calm and uncluttered, because a product interface will be placed over it. The laptop screen is blurred and unreadable. The last frame should closely match the first frame so the clip loops seamlessly. No text, no logos, no watermarks, no audio.
```
