import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import ProductSizes from "@/components/sections/ProductSizes";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Industries />
      <ProductSizes />
      <FAQ />

      {/* FAQ & Contact would go here */}
      <section id="contact" className="bg-background py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-muted">
            Request Purity
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Get in <span className="text-gradient">Touch</span>
          </h3>
          <p className="text-muted text-sm mb-12">
            Whether you need a single 5L bottle or a 1000L IBC, our team is ready to deliver the ultimate standard in deionized water.
          </p>
          <a
            href="https://forms.gle/gDSFKW5YGvnSf8Ea8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open request form in new tab"
            className="inline-block px-12 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-muted transition-all rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Open Request Form
          </a>
        </div>
      </section>
    </>
  );
}
