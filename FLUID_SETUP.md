# Fluid & Organic Design Setup Guide

## 🎨 Design Transformation Complete

Your site has been transformed into a **Cuberto-inspired fluid design** with:

- ✅ Custom cursor with magnet effect
- ✅ Fluid hero section with video mask
- ✅ Horizontal scroll work section
- ✅ Continuous footer ticker
- ✅ Syne typography (wide, heavy)
- ✅ Off-white/charcoal color scheme

## 📦 Dependencies Installed

- **GSAP** - For ScrollTrigger and smooth animations
- **Shery.js** - Loaded via CDN for liquid effects (optional)

## 🎬 Video Assets Needed

You'll need to add video files to the `public` folder:

1. **Hero Video** (`/public/hero-video.mp4`)
   - Large, cinematic video for the hero section
   - Will grow from text mask on scroll
   - Recommended: 1920x1080, 30fps, MP4

2. **Project Videos** (in `/public/`):
   - `project1.mp4` - Apex Roofing Systems
   - `project2.mp4` - FlowState CRM
   - `project3.mp4` - Lumina Dental Studio
   - `project4.mp4` - Next.js Architecture
   - Recommended: 1920x1080, 30fps, MP4, muted

### Video Placeholders

If you don't have videos yet, the site will show gradient placeholders. You can:
- Use stock videos from Pexels/Unsplash
- Create simple animated gradients
- Use placeholder.mp4 files

## 🚀 Next Steps

1. **Install GSAP** (if not already installed):
   ```bash
   npm install gsap
   ```

2. **Add your video files** to the `public` folder

3. **Test the site**:
   ```bash
   npm run dev
   ```

4. **Customize**:
   - Update project titles/descriptions in `components/HorizontalWork.tsx`
   - Adjust colors in `app/globals.css`
   - Modify typography sizes in components

## 🎯 Key Features

### Custom Cursor
- Black dot that follows mouse
- Larger circle with magnet effect on buttons/links
- Mix-blend-difference for visibility on all backgrounds

### Hero Section
- "WE ENGINEER FEELINGS" text with fluid skew on fast scroll
- Video mask that grows from text on scroll
- Large "SUBSTRACE" text behind for depth

### Horizontal Work Section
- Smooth horizontal scroll with GSAP ScrollTrigger
- Video cards (80vw width)
- "VIEW" circle that follows cursor on hover
- Mix-blend-difference for text visibility

### Footer Ticker
- Continuous scrolling "SUBSTRACE LABS" text
- Infinite loop animation

## 🎨 Color Scheme

- Background: `#F3F3F3` (Off-white)
- Text: `#111` (Deep charcoal)
- Accents: Black/white with mix-blend-difference

## 📝 Notes

- The cursor uses `mix-blend-difference` for visibility
- All interactive elements have `data-magnet` attribute
- Videos should be optimized for web (H.264 codec)
- GSAP ScrollTrigger handles all scroll animations

