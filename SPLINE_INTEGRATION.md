# Spline 3D Scene Integration Guide

## Overview
This project now includes Spline 3D scene integration with React, TypeScript, and shadcn/ui components.

## What Was Integrated

### Components Created

1. **SplineScene** (`src/components/ui/splite.tsx`)
   - Main component for rendering Spline 3D scenes
   - Uses React.lazy and Suspense for code splitting
   - Displays a loading spinner while the 3D scene loads
   - Props:
     - `scene`: URL to the Spline scene
     - `className`: Optional CSS classes

2. **Spotlight** (`src/components/ui/spotlight.tsx`)
   - Aceternity-style animated spotlight effect
   - Creates a dramatic light effect with SVG
   - Props:
     - `className`: Optional CSS classes
     - `fill`: Color of the spotlight (default: white)

3. **SpotlightInteractive** (`src/components/ui/spotlight-interactive.tsx`)
   - Interactive spotlight that follows mouse movement
   - Uses Framer Motion for smooth animations
   - Props:
     - `className`: Optional CSS classes
     - `size`: Size of the spotlight (default: 200px)
     - `springOptions`: Framer Motion spring configuration

4. **SplineSceneBasic** (`src/components/demo/spline-scene-demo.tsx`)
   - Demo component showing how to use SplineScene
   - Combines Card, Spotlight, and SplineScene components
   - Responsive layout with content on the left and 3D scene on the right

### Dependencies Installed

```bash
npm install @splinetool/runtime @splinetool/react-spline framer-motion
```

- `@splinetool/runtime`: Core Spline runtime
- `@splinetool/react-spline`: React wrapper for Spline
- `framer-motion`: Animation library for interactive spotlight

### Configuration Updates

1. **Tailwind Config** (`tailwind.config.js`)
   - Added `spotlight` keyframes for animated spotlight effect
   - Added `animate-spotlight` class

2. **Global Styles** (`src/index.css`)
   - Added `.loader` spinner styles for Suspense fallback
   - Rotating border animation for loading state

## Usage Examples

### Basic Usage

```tsx
import { SplineScene } from "@/components/ui/splite";

function MyComponent() {
  return (
    <SplineScene
      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      className="w-full h-[500px]"
    />
  );
}
```

### With Spotlight Effect

```tsx
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card className="relative overflow-hidden bg-black">
      <Spotlight className="-top-40 left-0" fill="white" />
      <SplineScene
        scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
        className="w-full h-[500px]"
      />
    </Card>
  );
}
```

### With Interactive Spotlight

```tsx
import { SplineScene } from "@/components/ui/splite";
import { SpotlightInteractive } from "@/components/ui/spotlight-interactive";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card className="relative">
      <SpotlightInteractive size={300} />
      <SplineScene
        scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
        className="w-full h-[500px]"
      />
    </Card>
  );
}
```

## Getting Your Spline Scene URL

1. Create your 3D scene at [spline.design](https://spline.design)
2. Click "Export" in the top right
3. Select "Code Export" → "React"
4. Copy the scene URL from the generated code
5. Use this URL in the `scene` prop

Example URL format: `https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode`

## Component Props Reference

### SplineScene

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| scene | string | Yes | URL to your Spline scene |
| className | string | No | Additional CSS classes |

### Spotlight (Aceternity)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| className | string | No | - | Additional CSS classes |
| fill | string | No | "white" | Color of the spotlight |

### SpotlightInteractive (ibelick)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| className | string | No | - | Additional CSS classes |
| size | number | No | 200 | Diameter of spotlight in pixels |
| springOptions | SpringOptions | No | { bounce: 0 } | Framer Motion spring config |

## Performance Considerations

1. **Code Splitting**: SplineScene uses React.lazy for automatic code splitting
2. **Large Bundle**: Spline scenes are large (2MB+). Consider:
   - Loading on interaction rather than page load
   - Showing placeholder images initially
   - Using dynamic imports for route-based code splitting

3. **Loading States**: The component includes a loading spinner, but you can customize it:

```tsx
<Suspense fallback={<YourCustomLoader />}>
  <SplineScene scene="..." />
</Suspense>
```

## Responsive Design

The demo component includes responsive layout:
- Desktop: Side-by-side content and 3D scene
- Mobile: Consider stacking or hiding the 3D scene

```tsx
<div className="flex flex-col md:flex-row">
  {/* Content */}
  <div className="flex-1">...</div>

  {/* 3D Scene - hidden on mobile */}
  <div className="flex-1 hidden md:block">
    <SplineScene ... />
  </div>
</div>
```

## Troubleshooting

### Scene Not Loading
- Verify the scene URL is correct and publicly accessible
- Check browser console for CORS errors
- Ensure you're using the export URL, not the editor URL

### Performance Issues
- Reduce scene complexity in Spline editor
- Optimize textures and geometry
- Consider using lower quality settings for mobile

### Build Warnings
- Large chunk warnings are expected due to Spline's size
- Consider implementing route-based code splitting

## Next Steps

1. Replace the demo scene URL with your own Spline creation
2. Customize the spotlight colors to match your brand
3. Add more interactive elements to your 3D scenes
4. Implement loading strategies for better performance
5. Add error boundaries for production use

## Resources

- [Spline Documentation](https://docs.spline.design/)
- [Spline React Component](https://github.com/splinetool/react-spline)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
