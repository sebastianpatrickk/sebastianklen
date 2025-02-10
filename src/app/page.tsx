import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import { Link } from "@/components/ui/Link";
import { experience, projects } from "@/lib/constants";
import { getBlogPosts } from "@/lib/mdx-utils";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <div className="my-8 w-full text-sm font-medium">
      <p className="leading-5">
        Hey, I{"'"}m Sebastian, a Software Engineer with 1 year experience at{" "}
        <Link href="/work">TaskGrip</Link>. I{"'"}m passionate about building
        software that{"'"}s fast, smooth and responsive. I like when people feel
        something through my work.
      </p>

      <p className="pt-4 leading-5">
        I am a person with an open-minded mindset who loves challenges, learning
        and trying new things. Currently studying at a high school in the Czech
        Republic with a focus on Computer Science.
      </p>

      <div className="space-y-3 pt-8">
        <h1 className="font-semibold">Experience</h1>
        <Projects projects={experience} />
      </div>
      <div className="space-y-3 pt-8">
        <h1 className="font-semibold">Projects</h1>
        <Projects projects={projects} />
      </div>
      {posts.length > 0 && (
        <div className="space-y-3 pt-8">
          <h1 className="font-semibold">Writings</h1>
          <Posts posts={posts} />
        </div>
      )}
    </div>
  );
}
