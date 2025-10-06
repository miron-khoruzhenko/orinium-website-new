import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import { TeamMember } from "@/types/sanity";
import Image from "next/image";

type Person = { id?: string; name: string; role: string };

export default function TeamSectionView({
  title,
  subtitle,
  foundersTitle = "Founders",
  leadsTitle = "Team Leads",
  founders,
  leads
}: {
  title: string;
  subtitle?: string;
  foundersTitle?: string;
  leadsTitle?: string;
  founders: TeamMember[] | [];
  leads: TeamMember[] | [];
}) {
  return (
    <section id="team" className="py-24 bg-white border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">{title}</h2>
        {subtitle && <p className="text-xl text-gray-600 mb-16 max-w-3xl">{subtitle}</p>}

        {/* Founders */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl mb-8">{foundersTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((f) => (
              <div key={f.name} className="border border-black">
                <div className="aspect-square bg-gray-100">
                  <ImageWithSkeleton
                    loading="lazy"
                    width={400}
                    height={400}
                    // src={`/professional-portrait.png?height=400&width=400&query=professional portrait ${f.name}`}
                    src={f.profilePictureUrl || `/home/profile_placeholder_man.webp`}
                    alt={f.alt || f.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-xl mb-1">{f.name}</div>
                  <div className="text-sm text-gray-600">{f.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leads */}
        <div>
          <h3 className="font-display font-bold text-2xl mb-8">{leadsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leads.map((l) => (
              <div key={l.name} className="border border-black">
                <div className="aspect-square bg-gray-100">
                  <ImageWithSkeleton
                    loading="lazy"
                    width={300}
                    height={300}
                    // src={`/professional-portrait.png?height=300&width=300&query=professional portrait ${l.name}`}
                    src={l.profilePictureUrl || `/home/profile_placeholder_man.webp`}
                    alt={l.alt || l.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-lg mb-1">{l.name}</div>
                  <div className="text-sm text-gray-600">{l.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
