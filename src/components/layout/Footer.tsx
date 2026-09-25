import Link from "next/link";
import { Brand } from "../common/Brand";
import { companyInfo } from "@/config/company";
import {
  footerNavigationLinks,
  footerServicesLinks,
  footerSocialLinks,
} from "@/data/siteContent";

export function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-bright">
        {title}
      </h4>
      <ul className="space-y-2.5 text-xs text-copy-muted">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link className="transition-colors hover:text-violet" href={href}>
                {label}
              </Link>
            ) : (
              <a className="transition-colors hover:text-violet" href={href}>
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer relative overflow-hidden border-t border-line pb-32 pt-20">
      <div className="watermark">ZYNX</div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <Brand />
            <p className="max-w-sm text-xs leading-relaxed text-copy-muted">
              Custom software, AI and business automation for growing companies.
            </p>
            <div className="space-y-1 pt-2 font-mono text-xs text-copy-faint">
              <p>{companyInfo.address}</p>
              <p>
                <a
                  className="text-copy hover:text-violet"
                  href={`mailto:${companyInfo.email}`}
                >
                  {companyInfo.email}
                </a>
              </p>
              <p>
                <a
                  className="text-copy hover:text-violet"
                  href={`tel:${companyInfo.phoneTel}`}
                >
                  {companyInfo.phone}
                </a>
              </p>
            </div>
          </div>

          <FooterLinks title="Navigation" links={footerNavigationLinks} />
          <FooterLinks title="Services" links={footerServicesLinks} />

          <div>
            <FooterLinks title="Follow us on" links={footerSocialLinks} />
            <h5 className="mb-2 mt-6 text-xs font-bold uppercase tracking-wider text-bright">
              Resources
            </h5>
            <Link className="text-xs text-glow" href="/services">
              AI Skill Guide
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-copy-faint sm:flex-row">
          <div>© 2026 Zynx Dev. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
