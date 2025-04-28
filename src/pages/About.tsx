import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Me | Tabby Neko";
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 animate-page-enter">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-gaming mb-8 text-center animate-content-enter">ABOUT <span className="text-primary">ME</span></h1>

        <div className="max-w-4xl mx-auto">
          {/* Thay đổi tiêu đề cho thân thiện hơn */}
          <div className="bg-card rounded-xl p-8 shadow-lg mb-8 animate-content-enter [animation-delay:200ms]">
            <h2 className="text-2xl font-gaming mb-4">Hello There! It's Me!</h2> {/* Tiêu đề thân thiện hơn */}
            <p className="text-muted-foreground mb-4 leading-relaxed"> {/* Thêm leading-relaxed cho dễ đọc */}
              Hi! My name is <strong>Nguyen Chi Tam</strong>, and I was born on <strong>February 14th, 2004</strong>, right here in <strong>Vietnam</strong>. You might also know me online as <strong>Tabby Neko</strong> (or Nyanko).
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Currently, I'm a student pursuing a degree in <strong>Information Technology</strong> at the <strong>Van Lang University</strong>. Alongside my studies, I'm really passionate about being both a <strong>music producer</strong> and a <strong>programmer</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey kinda started from a simple love for both music and technology. It's been fun exploring how to create unique soundscapes and build engaging applications. I always try my best to blend creativity with my technical skills, hoping to make cool things that people enjoy!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-content-enter [animation-delay:400ms]">
              <h3 className="text-xl font-gaming mb-4">My Musical Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started producing music back in <strong>late 2018</strong>. Since then, I've released several tracks and had the wonderful opportunity to collaborate with some talented artist friends. My style often focuses on creating <strong>Kawaii Music</strong>, mixing in elements from genres like <strong>Future House</strong>, <strong>Future Bass</strong>, and <strong>Lofi</strong>.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-content-enter [animation-delay:600ms]">
              <h3 className="text-xl font-gaming mb-4">My Programming Path</h3>
              <p className="text-muted-foreground leading-relaxed">
                I first started learning and programming around <strong>2016</strong>. Over the years, I've worked on various projects, including web applications and even some mobile apps. I genuinely enjoy the challenge of tackling tricky problems and crafting efficient, neat solutions.
              </p>
            </div>
          </div>

          {/* Optional: Thêm một phần nhỏ về sở thích khác? */}
          {/*
          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-content-enter [animation-delay:800ms]">
            <h3 className="text-xl font-gaming mb-4">When I'm Not Creating...</h3>
            <p className="text-muted-foreground leading-relaxed">
              Besides music and code, I also love [mention a hobby like gaming, reading, art, etc.]. It helps me relax and find new inspiration!
            </p>
          </div>
          */}

        </div>
      </div>
    </div>
  );
};

export default About;