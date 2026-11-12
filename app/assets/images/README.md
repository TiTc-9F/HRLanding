# Landing page 人物照片

這個資料夾放首頁的人物照片。**檔名就是位置名稱**，放進來就會自動顯示；還沒放的位置會顯示灰色占位框。

- 格式：`.jpg` 或 `.webp`（建議 JPG 品質 80 左右，每張 500 KB 以內）
- 尺寸照下表，比例要對，畫面才不會被裁到主角
- 人物一律是生成的虛構人物，**不要用真實員工或名人的臉**
- 畫面裡不要有文字、logo、浮水印、可辨識的品牌

## 共用風格（每張 prompt 都要加在最後）

所有照片要像同一次拍攝，色調和頁面一致（黑白灰為主，一點暖橘）：

```
Editorial documentary-style photograph, candid and unposed, people absorbed in the moment, not looking at the camera.
Modern, minimal office in Taipei or Singapore: white walls, light oak wood, concrete, linen, plants.
Soft natural window light, gentle shadows, true-to-life skin texture.
Muted neutral palette: warm white, light grey, charcoal, with one small touch of muted terracotta orange (a mug, a notebook, a sweater).
People of East Asian and Southeast Asian descent in their 20s to 50s, smart-casual clothing in neutral tones.
35mm lens, shallow depth of field, slight film grain, calm and trustworthy mood.
No text, no logos, no watermarks, no brand names, no stock-photo smiles, no futuristic or neon elements, no glowing screens.
```

## 照片清單

疊字或疊產品畫面的位置，prompt 裡已經寫明哪一塊要留乾淨。

### 1. `hero-one-on-one.jpg`：首屏主圖

- 尺寸：2400 × 1650（16:11）
- 位置：首屏右側，左下角會疊一張考核進度卡，右上角會疊兩張小卡

```
A team lead and a team member having a relaxed one-on-one conversation at a small round table by a large window, a laptop open but pushed aside, both leaning in and listening, a notebook and a terracotta mug on the table.
Place the two people in the center-right of the frame, upper two-thirds. Keep the bottom-left corner and the top-right corner calm and uncluttered (plain wall, soft window light), because interface cards will overlap those areas.
Horizontal 16:11.
```

### 2. `people-band.jpg`：寬幅團隊照

- 尺寸：2520 × 1080（21:9）；手機會從中間裁成 4:5，主角要在畫面中間 40% 寬度內
- 位置：跑馬燈下方，底部會疊一句白色標語，下緣會加深

```
A small cross-functional team of five gathered around a long wooden table in a bright open office, mid-discussion, one person sketching on paper while others react, natural and warm interaction, coffee cups and laptops.
Keep all key people within the central 40% of the width so the image can also be cropped to a tall 4:5. Keep the bottom third of the frame simple and slightly darker (table surface, floor) because a white headline will sit there.
Ultra-wide 21:9.
```

### 3. `showcase-configure.jpg`：自訂評估流程

- 尺寸：2400 × 1800（4:3）
- 位置：產品特色第一段，下方約 40% 會被產品畫面蓋住（偏左）

```
An HR specialist working at a standing desk, thoughtfully reviewing something on a laptop, one hand on the trackpad, a printed org chart and sticky notes beside the laptop, focused but relaxed expression.
Keep the person's face and hands in the upper 60% of the frame, positioned toward the right. The lower-left 40% will be covered by an interface panel, so keep it simple.
Horizontal 4:3.
```

### 4. `showcase-routing.jpg`：自動指派

- 尺寸：2400 × 1800（4:3）
- 位置：產品特色第二段，下方約 40% 會被產品畫面蓋住（偏右）

```
A team lead sitting with two colleagues on a sofa corner of the office, going through feedback together on a tablet, one colleague pointing at the screen, collaborative and respectful atmosphere.
Keep all three faces in the upper 60% of the frame, positioned toward the left. The lower-right 40% will be covered by an interface panel, so keep it simple.
Horizontal 4:3.
```

### 5. `showcase-payroll.jpg`：出勤到薪資

- 尺寸：2400 × 1800（4:3）
- 位置：產品特色第三段，下方約 40% 會被產品畫面蓋住（偏左）

```
An employee arriving at the office entrance in the morning, holding a coffee, glancing at their phone to clock in, soft morning light through glass doors, a colleague walking past in the background, slightly out of focus.
Keep the person in the upper 60% of the frame, positioned toward the right. The lower-left 40% will be covered by an interface panel, so keep it simple.
Horizontal 4:3.
```

### 6. `role-hr.jpg`：角色分頁「HR」

- 尺寸：1920 × 1080（16:9）
- 位置：角色分頁右側的深色卡片上方

```
An HR partner in a quiet meeting room talking warmly with an employee, holding a printed document, attentive listening, both seated, glass wall behind them.
Subjects centered. Horizontal 16:9.
```

### 7. `role-manager.jpg`：角色分頁「主管」

- 尺寸：1920 × 1080（16:9）

```
A manager standing at a whiteboard with three team members seated around, discussing plans, the manager gesturing toward hand-drawn boxes and arrows (no readable text), engaged team.
Subjects centered. Horizontal 16:9.
```

### 8. `role-employee.jpg`：角色分頁「員工」

- 尺寸：1920 × 1080（16:9）

```
An employee focused at their desk with headphones around the neck, typing on a laptop, a plant and a terracotta notebook nearby, calm concentration, colleagues softly blurred in the background.
Subject centered. Horizontal 16:9.
```

### 9. `role-leader.jpg`：角色分頁「管理層」

- 尺寸：1920 × 1080（16:9）

```
Two senior leaders in a small meeting room reviewing printed charts spread on the table (abstract bars, no readable numbers or text), one listening while the other explains, thoughtful and decisive mood.
Subjects centered. Horizontal 16:9.
```

### 10. `scenario-global.jpg`：情境「跨國團隊」

- 尺寸：2400 × 1800（4:3）
- 位置：適用情境卡片上方

```
A colleague in a Taipei office on a video call with teammates in Singapore, the laptop screen showing a softly blurred grid of two or three people (no readable UI), friendly conversation, late afternoon light.
Subject centered. Horizontal 4:3.
```

### 11. `scenario-tech.jpg`：情境「技術職為主」

- 尺寸：2400 × 1800（4:3）

```
Two software engineers pair-reviewing work at a dual-monitor desk, the monitors showing blurred, unreadable code-like shapes, one engineer explaining and the other nodding, focused collaboration.
Subjects centered. Horizontal 4:3.
```

### 12. `scenario-growth.jpg`：情境「快速成長」

- 尺寸：2400 × 1800（4:3）

```
A new hire on their first day being welcomed and shown around the office by a friendly colleague, carrying a new laptop and a welcome tote bag, walking past desks, genuine and warm moment.
Subjects centered. Horizontal 4:3.
```
