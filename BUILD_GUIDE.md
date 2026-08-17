# InbredTechno Website — Build Guide & Roadmap

## Current Status: Stage 2 Complete ✓

The website is production-ready through the **AI Section**. All components are type-safe, linted, and verified with `npm run build`.

### What's Built

#### Stage 1 (Hero Foundation)
- **Design System**: Dark futuristic aesthetic (void black `#0A0B0D`, cyan `#4DE8FF`, violet `#8B7FFF`)
- **Typography**: Space Grotesk (display), Inter (body), JetBrains Mono (HUD labels)
- **Global Features**:
  - Lenis smooth scroll with reduced-motion support
  - Custom magnetic cursor (desktop only, respects reduced-motion)
  - System initializing loader (modular phases)
  - Floating navbar with cinematic mobile menu
  
- **Hero Section**:
  - Scroll-driven Technology Core 3D scene (glowing icosahedron core that splits into 4 systems: SOFTWARE / AI / APPLICATIONS / ROBOTICS)
  - Particle field with orbiting nodes
  - Mouse parallax interaction
  - AnimatedText component (word-by-word reveal)
  - `useScrollProgress` hooks for scroll-driven animations

- **Capabilities Section** (What We Build):
  - Interactive list with 5 major capabilities
  - Hover-driven detail panel showing description, stack, and visual accent
  - Responsive grid → stacked layout

#### Stage 2 (3D Systems & Intelligence)
- **SaaS Architecture Section**:
  - Floating UI panels (API, AUTH, PAYMENTS, DATABASE, ANALYTICS, NOTIFICATIONS)
  - Sequential scroll-driven appearance
  - Connecting lines between components and central core
  - Color-coded by function

- **Applications Section**:
  - 3D device mockups: iPhone, iPad, Browser window
  - Wireframe rendering with screen grids
  - Sequential animation on scroll
  - Mouse-driven orbit camera

- **AI / Neural Network Section**:
  - 5-layer neural network (DATA → TRAINING → MODEL → INFERENCE → PRODUCT)
  - 60+ nodes (20 on low-end devices) with pulsing animation
  - Data particles flowing through connections
  - Scroll-driven layer activation
  - Low-power fallback (reduced node/particle count)

#### Performance & Accessibility
- Device tier detection (mobile/low-power auto-reduces particle counts, caps DPR)
- WebGL fallback (graceful 2D cascade if Three.js unavailable)
- Keyboard focus states with cyan outline
- Respects `prefers-reduced-motion`
- Optimized instanced geometry (no per-particle mesh overhead)

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site prerenders, loads with the initializer, then scrolls through Hero → Capabilities → SaaS → Applications → AI → Contact → Footer.

---

## Architecture

### Folder Structure
```
src/
├── app/
│   ├── layout.tsx          (root + fonts + providers)
│   ├── page.tsx            (page composition + loader gate)
│   └── globals.css         (design tokens + utilities)
├── components/
│   ├── providers/          (SmoothScrollProvider)
│   ├── cursor/             (CustomCursor)
│   ├── loader/             (Loader animation)
│   ├── navbar/             (Navbar + mobile menu)
│   ├── hero/               (Hero section)
│   ├── scenes/
│   │   ├── ThreeScene.tsx  (Canvas wrapper)
│   │   ├── TechnologyCore.tsx
│   │   ├── SaaSArchitecture.tsx
│   │   ├── DeviceScene.tsx
│   │   ├── NeuralNetwork.tsx
│   │   ├── ParticleField.tsx
│   ├── sections/
│   │   ├── WhatWeBuild.tsx
│   │   ├── SaaSSection.tsx
│   │   ├── ApplicationsSection.tsx
│   │   ├── AISection.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   └── ui/
│       ├── AnimatedText.tsx (staggered word reveal)
│       ├── MagneticButton.tsx (spring-based hover)
│       └── Atoms.tsx (HudLabel, ScrollIndicator, SectionLabel)
├── hooks/
│   ├── useScrollProgress.ts (global + section-scoped scroll tracking)
│   └── useDeviceTier.ts (mobile/low-power detection)
├── data/
│   └── capabilities.ts (capability definitions for What We Build)
└── lib/ (empty — ready for utilities)
```

### Key Patterns

**Scroll-Driven Animation**:
```tsx
const sectionRef = useRef<HTMLElement>(null);
const progress = useSectionProgress(sectionRef); // 0→1 as section scrolls

// use progress to drive Three.js or Framer Motion
<ThreeScene>
  <NeuralNetwork scrollProgress={Math.min(1, progress * 1.3)} />
</ThreeScene>
```

**Three.js Scene Wrapper**:
```tsx
<ThreeScene cameraPosition={[0, 0, 8]} fov={45}>
  <SceneComponent scrollProgress={progress} lowPower={tier === "low"} />
</ThreeScene>
```

**Animated Text**:
```tsx
<AnimatedText
  as="h2"
  text="Intelligence, engineered."
  className="font-display text-5xl..."
  delay={0.2}
  stagger={0.06}
/>
```

---

## What's Next (Stage 3)

### AI Training Visualization
A cinematic scroll-driven sequence showing DATA → TRAINING → MODEL:
- **Component**: `AITrainingSection.tsx`
- **Scene**: `AITrainingVisualization.tsx`
- **Concept**: Millions of particles entering a training system, reorganizing, forming a structured model over scroll

### Robotics Section & Assembly
A major showstopper: robot assembles piece-by-piece on scroll (head → body → arms → motors → sensors → wheels → electronics), then activates with eyes lighting up and movement.
- **Component**: `RoboticsSection.tsx`
- **Scene**: `RobotAssembly.tsx` and `RobotActivation.tsx`
- **Labels**: VISION, MOTION, CONTROL, SENSORS, AI, EDGE COMPUTING

### Robot Control Pipeline
USER → APP → API → AI/CONTROL SYSTEM → ROBOT → PHYSICAL ACTION, visualized as glowing data lines connecting boxes.
- **Component**: `RobotControlSection.tsx`
- **Concept**: Scroll triggers command flow animation

### Works / Portfolio Section
A creative project gallery (not boring rectangular cards). Projects organize by category (ALL, SAAS, WEB, MOBILE, AI, ROBOTICS) with hover expansion, image depth, and clickable detail views.
- **Component**: `WorksSection.tsx`
- **Data**: `data/projects.ts` (easily extendable)
- **Gallery Layout**: Featured project + smaller projects around it

### Technology Stack Orbit
Technologies (React, Node.js, PyTorch, etc.) orbit around a central INBREDTECHNO core. Hovering a tech highlights its connections to other tools.
- **Component**: `TechStackSection.tsx`
- **Scene**: `TechOrbits.tsx`

### Process Section
5-stage process (DISCOVER → DESIGN → ENGINEER → INTELLIGENCE → DEPLOY) with horizontal scroll on desktop, vertical cinematic on mobile. Each stage has description, icon, and timeline marker.
- **Component**: `ProcessSection.tsx`
- **Concept**: Theatre.js-driven cinematic sequence or Framer Motion timeline

### About Section
Concise copy positioning InbredTechno at the intersection of SOFTWARE, INTELLIGENCE, MACHINES. Abstract 3D scene showing three systems merging.
- **Component**: `AboutSection.tsx`
- **Scene**: `ThreeSystemsMerge.tsx`

---

## Design Decisions

### Color Palette
- **Void Base**: `#0A0B0D` (near-black, feels technical)
- **Cyan Accent**: `#4DE8FF` (primary call-to-action, core systems)
- **Violet Secondary**: `#8B7FFF` (alternative system accent)
- **Active/Success**: `#3CFF8E` (green, for "online" and completion states)
- **Alert**: `#FF5470` (red, for robotics/physical systems)
- **Warm Tech**: `#FFB84D` (orange, for database/infrastructure)

### Typography Hierarchy
- **Display (Space Grotesk)**: Hero titles, section headlines — tight letter-spacing, medium weight
- **Body (Inter)**: Paragraphs, descriptions — light weight, relaxed spacing
- **Mono (JetBrains)**: HUD labels, data readouts, technical markers — uppercase, wider letter-spacing

### 3D / Animation Philosophy
1. **Scenes stay silent** — no distracting background hums or whooshes; motion is the communication
2. **Scroll is the controller** — scrolling feels cinematic and intentional, not just "sections appearing"
3. **Low-power device fallback** — always check `useDeviceTier()` and reduce particle count, disable expensive effects on mobile
4. **WebGL fallback** — if Three.js fails, show a graceful 2D gradient cascade, never leave a blank

### Performance Targets
- **Desktop**: 90+ FPS (high-quality 3D, all particles, full DPR)
- **Tablet**: 60 FPS (reduced particle count, DPR capped at 1.25)
- **Mobile**: 60 FPS (simplified 3D, minimal particles, DPR capped at 1)

---

## Extending the Project

### Adding a New Section

1. **Create the component**:
   ```tsx
   // src/components/sections/MySection.tsx
   export function MySection() {
     const sectionRef = useRef<HTMLElement>(null);
     const progress = useSectionProgress(sectionRef);
     return <section ref={sectionRef}>...</section>;
   }
   ```

2. **If it has 3D, create a scene**:
   ```tsx
   // src/components/scenes/MyScene.tsx
   export function MyScene({ scrollProgress }: { scrollProgress: number }) {
     return <group>...</group>;
   }
   ```

3. **Add to page.tsx**:
   ```tsx
   import { MySection } from "@/components/sections/MySection";
   // in page return:
   <MySection />
   ```

### Adding Projects to the Works Section
Edit `src/data/projects.ts`:
```ts
export const PROJECTS: Project[] = [
  {
    title: "My AI Product",
    category: "AI",
    description: "...",
    technologies: ["Python", "PyTorch"],
    image: "/projects/my-ai.jpg",
    video: "/projects/my-ai.mp4",
    link: "/works/my-ai",
    featured: true
  },
  // ... more
];
```

### Customizing Colors
Edit `src/app/globals.css` at the `:root` level:
```css
:root {
  --color-cyan: #4de8ff; /* change this */
  --color-violet: #8b7fff; /* change this */
  /* etc */
}
```

All components reference CSS variables, so changes cascade globally.

---

## Deployment

The site is optimized for Vercel. Push to GitHub and connect to Vercel — fonts will auto-resolve, and the Next.js build is production-ready.

```bash
# Local production build (will fetch fonts if internet available)
npm run build
npm start
```

---

## Troubleshooting

**"Fonts not loading"**: Verify you have internet access. In sandbox/offline environments, comment out the `next/font/google` imports in `layout.tsx` and use system fonts as fallback.

**"3D scene is blank"**: Check the browser console for WebGL errors. `ThreeScene` has a built-in `SceneFallback` that renders a 2D version if WebGL unavailable.

**"Animations are janky"**: Run `npm run build` and profile in production mode. Check `useDeviceTier()` to ensure mobile gets reduced particle counts. If still janky, reduce particle count further in `SaaSArchitecture`, `NeuralNetwork`, etc.

**"Custom cursor doesn't show"**: Custom cursor only appears on desktop (`hover: hover` + `pointer: fine`). Mobile shows native pointer.

---

## File Sizes (No node_modules)

- Stage 1 (Hero + Capabilities): ~65 KB
- Stage 2 (+ SaaS + Applications + AI): ~95 KB
- Final (all sections): expected ~180 KB

All 3D scenes use Three.js instanced geometry and lazy-load via React Suspense, so initial bundle impact is minimal.

---

## Next Steps

1. Unzip `inbredtechno-stage2.zip`
2. `npm install`
3. `npm run dev`
4. Scroll through the site
5. For Stage 3, I'll build AI Training, Robotics, Works, Tech Stack, Process, About — same architecture, same design language

Enjoy the build!
