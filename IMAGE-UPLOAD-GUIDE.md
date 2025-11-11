# 📸 Image Upload Guide for Portfolio

This guide will help you add all images to your portfolio website.

## 📋 Quick Checklist

Upload these **7 images** to the `/images/` folder:

- [ ] `alok.jpg` - Your professional photo
- [ ] `liver-cirrhosis.jpg` - Project 1 screenshot
- [ ] `shopping-karo.jpg` - Project 2 screenshot
- [ ] `faceattendai.jpg` - Project 3 screenshot
- [ ] `the-god-ai.jpg` - Project 4 screenshot
- [ ] `portfolio.jpg` - Project 5 screenshot
- [ ] `myflat.jpg` - Project 6 screenshot

---

## 🎯 Image Requirements

### 1. Profile Photo: `alok.jpg`
**Location:** Hero section & About section  
**Recommended Size:** 600x800px (portrait)  
**File Size:** Under 300KB  

**What to include:**
- Professional headshot or full body photo
- Good lighting and clear background
- Business casual or formal attire
- High resolution and sharp focus

**Tips:**
- Use a plain background (white, gray, or blue)
- Face should be clearly visible
- Smile naturally
- Professional appearance

---

### 2. Project Images

All project images should be:
- **Format:** JPG or PNG
- **Aspect Ratio:** 16:9 or 4:3 (landscape)
- **Recommended Size:** 800x600px
- **File Size:** Under 500KB each

---

#### `liver-cirrhosis.jpg` - Liver Cirrhosis Detection ML Project
**What to screenshot:**
- Model architecture diagram
- Confusion matrix or accuracy metrics (showing 92% accuracy)
- Dashboard with predictions
- Code snippet of the ML model
- Results visualization

**Where to get:**
- Open your Jupyter Notebook or Python file
- Take screenshot of model results
- Capture the classification report or ROC curve

---

#### `shopping-karo.jpg` - Shopping Karo E-commerce
**What to screenshot:**
- Homepage with product listings
- Shopping cart interface
- Product detail page
- Responsive design showcase

**Where to get:**
- Open the live React app
- Navigate to main product page
- Use browser full-page screenshot
- Show multiple products in grid layout

---

#### `faceattendai.jpg` - FaceAttendAI System
**What to screenshot:**
- Face detection in action (camera feed with bounding boxes)
- Admin dashboard showing attendance records
- Student list with photos
- Login/logout interface

**Where to get:**
- Run your Flask app locally
- Open the web interface
- Capture the main dashboard or face detection screen
- Show real-time detection or results table

---

#### `the-god-ai.jpg` - The God AI Interview Co-Pilot
**What to screenshot:**
- Main dashboard interface
- Overlay window in action
- AI response panel
- Interview session screen
- Settings or features panel

**Where to get:**
- Open https://thegodai.netlify.app/
- Take screenshot of the main interface
- Capture the dashboard or overlay demo
- Show key features visually

---

#### `portfolio.jpg` - This Portfolio Website
**What to screenshot:**
- Full homepage view
- Hero section with your name
- Projects section
- Skills section
- Complete layout overview

**How to capture:**
1. Open your portfolio in browser
2. Use browser developer tools:
   - Chrome: Ctrl+Shift+P → "Capture full size screenshot"
   - Firefox: Right-click → "Take a Screenshot"
3. Or scroll and take multiple screenshots, then stitch together
4. Show the complete layout

---

#### `myflat.jpg` - My-flat Real Estate & Flatmate Platform
**What to screenshot:**
- Homepage with property listings
- Search and filter interface
- Google Maps integration with markers
- Admin dashboard with KPIs and charts
- Property detail page or flatmate listings

**Where to get:**
- Open https://shahpoorji.netlify.app/
- Navigate to main dashboard or listings page
- Capture the search interface or map view
- Show property cards or admin features

---

## 🛠️ How to Take Screenshots

### Option 1: Browser Full-Page Screenshot (Recommended)

**Chrome:**
1. Press `F12` (open DevTools)
2. Press `Ctrl+Shift+P` (Command Menu)
3. Type "screenshot"
4. Select "Capture full size screenshot"
5. Saves automatically to Downloads

**Firefox:**
1. Right-click on page
2. Select "Take a Screenshot"
3. Choose "Save full page"

### Option 2: Snipping Tool (Windows)
1. Press `Win+Shift+S`
2. Select area
3. Save from clipboard

### Option 3: Screenshot Tools
- **Windows:** Snipping Tool, Greenshot
- **Mac:** Cmd+Shift+4
- **Linux:** Flameshot, Shutter
- **Extensions:** Awesome Screenshot, Nimbus

---

## 📏 Image Optimization

Before uploading, optimize your images to reduce file size:

### Online Tools (Free)
1. **TinyPNG** - https://tinypng.com/
   - Drag and drop images
   - Compresses without quality loss
   - Download optimized versions

2. **Squoosh** - https://squoosh.app/
   - Advanced compression options
   - Side-by-side comparison
   - Choose quality vs size

3. **Compressor.io** - https://compressor.io/
   - Quick compression
   - No signup required

### Desktop Tools
- **ImageOptim** (Mac)
- **RIOT** (Windows)
- **GIMP** (All platforms)

---

## 📁 Upload Instructions

### Method 1: VS Code (Easiest)
1. Open VS Code
2. Navigate to `/workspaces/My-Portfolio/images/` folder
3. Drag and drop your 6 images into the folder
4. Done! Images are automatically saved

### Method 2: Terminal
```bash
cd /workspaces/My-Portfolio/images/

# Upload files (use your file manager to copy)
# Or use command line:
cp ~/Downloads/alok.jpg ./
cp ~/Downloads/liver-cirrhosis.jpg ./
cp ~/Downloads/shopping-karo.jpg ./
cp ~/Downloads/faceattendai.jpg ./
cp ~/Downloads/the-god-ai.jpg ./
cp ~/Downloads/portfolio.jpg ./
```

### Method 3: GitHub Web Interface
1. Go to https://github.com/aloksingh1818/My-Portfolio
2. Navigate to `images/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop all 6 images
5. Commit changes

---

## ✅ Verify Images

After uploading, run your portfolio locally:

```bash
cd /workspaces/My-Portfolio
python3 -m http.server 8000
```

Open: http://localhost:8000

**Check:**
- [ ] Profile photo appears in About section
- [ ] All 6 project cards show images
- [ ] Images load correctly
- [ ] No broken image icons
- [ ] Mobile responsive (resize browser)

---

## 🎨 Alternative: Use Placeholder Images (Temporary)

If you don't have images yet, the portfolio will show:
- Icon placeholders (already built-in)
- Gradient backgrounds
- Font Awesome icons

This allows you to launch immediately while you prepare images!

### Free Stock Images (Temporary Use)
- **Unsplash** - https://unsplash.com/
- **Pexels** - https://www.pexels.com/
- **Pixabay** - https://pixabay.com/

Search for:
- "professional headshot" (for profile)
- "machine learning dashboard" (for ML projects)
- "ecommerce website" (for Shopping Karo)
- "code editor" or "programming" (for other projects)

---

## 🚀 After Adding Images

Commit and push to GitHub:

```bash
git add images/
git commit -m "Add profile and project images"
git push origin main
```

Your portfolio will automatically update on GitHub Pages!

---

## 📞 Need Help?

If images don't appear:
1. Check file names match exactly (case-sensitive)
2. Verify images are in `/images/` folder
3. Check file extensions (.jpg, not .jpeg)
4. Clear browser cache (Ctrl+F5)
5. Check browser console for errors (F12)

---

## 🎯 Summary

**What you need:**
- 1 profile photo: `alok.jpg`
- 6 project screenshots with these exact names:
  - `liver-cirrhosis.jpg`
  - `shopping-karo.jpg`
  - `faceattendai.jpg`
  - `the-god-ai.jpg`
  - `portfolio.jpg`
  - `myflat.jpg`

**Where to put them:**
- `/workspaces/My-Portfolio/images/` folder

**What happens next:**
- Portfolio displays all images automatically
- Fallback to icon placeholders if image missing
- Responsive across all devices

---

Good luck! Your portfolio will look amazing with proper images! 🎉
