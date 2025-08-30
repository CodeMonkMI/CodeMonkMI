import { Button } from "@/components/ui/button";
import { Github, Link, Linkedin, Mail } from "lucide-react";

type SocialLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

interface SocialLinksProps {
  links: SocialLink[];
}

const links = [
  {
    href: "https://github.com/codemonkmi",
    icon: <Github size={24} />,
    label: "Github",
  },
  {
    href: "https://linkedin.com/in/codemonkmi",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:mmislam027@gmail.com",
    icon: <Mail size={24} />,
    label: "Email",
  },
  {
    href: "https://leetcode.com/u/codemonkmi",
    icon: <Link size={24} />,
    label: "LeetCode",
  },
  {
    href: "https://www.hackerrank.com/profile/codemonkmi",
    icon: <Link size={24} />,
    label: "HackerRank",
  },
  {
    href: "https://dev.to/codemonkmi",
    icon: <Link size={24} />,
    label: "Dev.to",
  },
  {
    href: "https://www.youtube.com/@MonirulIslam-h1i",
    icon: <Link size={24} />,
    label: "Youtube",
  },
];

// 2. Contact Social
export const ContactSocial = () => (
  <div className="w-full px-3 h-full flex justify-center items-center">
    <div>
      <h4 className="hidden text-xl mb-2 text-center">Links</h4>
      <div className="space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-foreground/80 hover:text-primary transition-colors duration-200 block"
            aria-label={link.label}
            title={link.label}
          >
            <Button variant="outline" className="w-full">
              <p className="flex items-center">{link.label}</p>
            </Button>
          </a>
        ))}
      </div>
    </div>
  </div>
);
// 2. Contact Social
export const ContactSocial2 = () => (
  <div className="w-full px-3 h-full flex justify-center items-center">
    <div>
      <h4 className="hidden text-xl mb-2 text-center">Links</h4>
      <div className="space-y-2">
        {links.slice(Math.floor(links.length / 2)).map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-foreground/80 hover:text-primary transition-colors duration-200 block"
            aria-label={link.label}
            title={link.label}
          >
            <Button variant="outline" className="w-full">
              <p className="flex items-center">{link.label}</p>
            </Button>
          </a>
        ))}
      </div>
    </div>
  </div>
);
