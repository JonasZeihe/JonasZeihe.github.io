import React, { useState } from 'react';
import {
  HeroWrapper,
  SectionWrapper,
  MediaDisplay,
  Typography,
  HighlightText,
  ListComponent,
  Badge,
  Button,
  Lightbox,
} from '../../../../utils/sharedComponents';
import FlavorFusionImage from '../../../../assets/images/Projects/flavorfusion_logo.png';

export default function FlavorFusionDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🎨 <HighlightText>Visuelles Storytelling:</HighlightText> Individuelle
          Farbpaletten und kulturelle Karten, die die Vielfalt der Weltküchen
          betonen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🧩 <HighlightText>User-Centered Design:</HighlightText> Intuitive
          Navigation und klar strukturierte Inhalte für eine optimale
          Benutzererfahrung.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          ✏️ <HighlightText>High-Fidelity Prototyping:</HighlightText>{' '}
          Realistischer und animierter Prototyp, der in Figma entwickelt wurde.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🚀 <HighlightText>Interaktive Call-to-Actions:</HighlightText>{' '}
          Animierte Buttons und Download-Optionen, die Nutzer zur App führen.
        </>
      ),
    },
  ];

  const badges = [
    { label: 'Figma', icon: 'FaFigma', variant: 'primary' },
    { label: 'FigJam', icon: 'FaPencilAlt', variant: 'secondary' },
    { label: 'Notion', icon: 'FaBook', variant: 'accent' },
    { label: 'ChatGPT', icon: 'FaRobot', variant: 'success' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" align="center">
            🍴 FlavorFusion – Die Welt in deiner Küche
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: FlavorFusionImage,
                alt: 'FlavorFusion Project Image',
              },
            ]}
            onClick={() => setLightboxOpen(true)}
          />
        </HeroWrapper>

        <Typography
          variant="body"
          align="center"
          color="neutral.main"
          style={{ marginTop: '1rem' }}
        >
          <HighlightText>FlavorFusion</HighlightText> ist eine interaktive
          Landing Page, die Nutzer dazu inspiriert, die Vielfalt der Weltküchen
          zu entdecken. Mit einem Fokus auf{' '}
          <HighlightText>visuelles Storytelling</HighlightText> und{' '}
          <HighlightText>intuitive Navigation</HighlightText> ist FlavorFusion
          nicht nur funktional, sondern auch eine emotionale Erfahrung, die Lust
          auf neue Rezepte macht.
        </Typography>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Highlights von <HighlightText>FlavorFusion</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      {/* Technologien */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="accent.dark">
          🛠️ Tools und Technologien
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </div>
      </SectionWrapper>

      {/* Aktueller Stand */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="primary.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          <HighlightText>Status:</HighlightText> Der High-Fidelity-Prototyp ist
          abgeschlossen und als klickbare Case Study in React verfügbar.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          <HighlightText>Zukunft:</HighlightText> Erweiterung der Landing Page
          zu einer vollständig interaktiven App mit neuen Features wie
          Sprachsteuerung und KI-gestützten Rezeptempfehlungen.
        </Typography>
      </SectionWrapper>

      {/* Call-to-Actions */}
      <SectionWrapper backgroundColor="neutral.lightest">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <Button variant="primary" onClick={() => {}}>
            Mehr erfahren
          </Button>
          <Button variant="success" onClick={() => {}}>
            Prototyp ansehen
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (nur für das Bild) */}
      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: FlavorFusionImage,
              alt: 'FlavorFusion Project Image',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
