"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Clock, Fish, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Menu", id: "menu" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Al Posto Giusto"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "gradient-bars" }}
            title="Al Posto Giusto f.lli Costa"
            description="Authentic seafood cuisine in the heart of Nola. Family tradition, refined taste, and an unforgettable dining experience."
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/high-angle-delicious-seafood-wine_23-2149410733.jpg", alt: "High angle delicious seafood and wine" },
              { src: "http://img.b2bpic.net/free-photo/high-angle-safari-party-with-drinks-snacks_23-2149707894.jpg", alt: "High angle safari party with drinks and snacks" },
              { src: "http://img.b2bpic.net/free-photo/fried-shrimps-with-cucumber-rolls_140725-6657.jpg", alt: "Fried shrimps with cucumber rolls" },
              { src: "http://img.b2bpic.net/free-photo/high-angle-delicious-sea-food_23-2149214657.jpg", alt: "High angle delicious sea food" },
              { src: "http://img.b2bpic.net/free-photo/group-young-people-having-wine-together_23-2148454082.jpg", alt: "elegant diner enjoying meal" }
            ]}
            buttons={[
              { text: "Prenota Tavolo", href: "#contact" },
              { text: "Menu", href: "#menu" }
            ]}
            avatarText="Uniti dalla passione per il gusto"
            marqueeItems={[
              { type: "text", text: "Pesce Fresco Giornaliero" },
              { type: "text", text: "Tradizione Familiare" },
              { type: "text", text: "Vini Selezionati" },
              { type: "text", text: "Atmosfera Elegante" },
              { type: "text", text: "Qualità Certificata" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="La Nostra Storia"
            title="Tradizione di Famiglia"
            description="I fratelli Costa portano avanti una tradizione fatta di qualità, accoglienza e passione per il mare."
            subdescription="Ogni piatto racconta la vera cucina italiana, con ingredienti freschi e selezionati con cura."
            icon={Fish}
            imageSrc="http://img.b2bpic.net/free-photo/woman-preparing-fish-cooking_23-2148949110.jpg"
            mediaAnimation="slide-up"
            useInvertedBackground={true}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardSixteen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            negativeCard={{ items: ["Servizio impeccabile", "Ingredienti di alta qualità", "Passione per la cucina", "Esperienza decennale", "Accoglienza calda"] }}
            positiveCard={{ items: ["Pesce fresco di giornata", "Selezione di vini regionali", "Atmosfera accogliente", "Posizione centrale", "Menu stagionale"] }}
            title="Perché Sceglierci"
            description="Un'esperienza gastronomica unica tra tradizione e innovazione."
          />
        </div>

        <div id="menu" data-section="menu">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            products={[
              { id: "1", name: "Grigliata di Pesce", price: "28€", imageSrc: "http://img.b2bpic.net/free-photo/large-poon-choi-bowl-filled-with-layered-meats-seafood-lunar-new-year-celebration-table_123827-36974.jpg" },
              { id: "2", name: "Spaghetti agli Scampi", price: "22€", imageSrc: "http://img.b2bpic.net/free-photo/stir-fried-spaghetti-seafood_1339-3424.jpg" },
              { id: "3", name: "Antipasto della Casa", price: "18€", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-mussels-white-sauce-spices_23-2148234935.jpg" },
              { id: "4", name: "Zuppa di Mare", price: "24€", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-assortment-seafood-with-cutlery_23-2148643671.jpg" },
              { id: "5", name: "Insalata di Mare", price: "16€", imageSrc: "http://img.b2bpic.net/free-photo/oysters-sauce-with-salad_140725-4134.jpg" },
              { id: "6", name: "Filetto del Giorno", price: "26€", imageSrc: "http://img.b2bpic.net/free-photo/salmon-with-sushi_1203-697.jpg" }
            ]}
            title="I Nostri Piatti"
            description="Scopri le nostre specialità a base di pesce fresco."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="bento-grid"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Marco Rossi", role: "Cliente", company: "Nola", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/group-young-people-having-wine-together_23-2148454082.jpg" },
              { id: "2", name: "Elena Bianchi", role: "Cliente", company: "Nola", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006711.jpg" },
              { id: "3", name: "Giulia Verdi", role: "Cliente", company: "Nola", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiley-couple-sharing-fast-food_329181-20757.jpg" },
              { id: "4", name: "Luca Neri", role: "Cliente", company: "Nola", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-with-dish-menu_23-2147681115.jpg" },
              { id: "5", name: "Sara Blu", role: "Cliente", company: "Nola", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-salad-cafe_1303-25274.jpg" }
            ]}
            title="Cosa Dicono di Noi"
            description="Esperienze condivise dai nostri clienti soddisfatti."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            metrics={[
              { id: "1", value: "20+", title: "Anni di Attività", description: "Passione e tradizione dal 2006", icon: Clock },
              { id: "2", value: "4.6", title: "Valutazione Media", description: "Clienti soddisfatti ogni giorno", icon: Star },
              { id: "3", value: "100+", title: "Piatti in Menu", description: "Una selezione completa di mare", icon: Fish }
            ]}
            title="Il Nostro Successo"
            description="Numeri che testimoniano la qualità del nostro lavoro."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            tag="Contatti"
            title="Prenota un Tavolo"
            description="Siamo pronti ad accogliervi nel nostro ristorante a Nola."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Al Posto Giusto f.lli Costa"
            columns={[
              { title: "Menu", items: [{ label: "Piatti", href: "#menu" }, { label: "Vini", href: "#menu" }] },
              { title: "Contatti", items: [{ label: "Prenota", href: "#contact" }, { label: "Dove Siamo", href: "#contact" }] }
            ]}
            copyrightText="© 2026 Al Posto Giusto f.lli Costa"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}