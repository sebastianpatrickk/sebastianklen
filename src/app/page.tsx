import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import { Link } from "@/components/ui/Link";
import { projects } from "@/lib/constants";
import { getBlogPosts } from "@/lib/mdx-utils";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <div className="mt-8 w-full text-sm font-medium">
      <p className="leading-5">
        Hey, I&apos;m Sebastian, a full-stack web engineer at{" "}
        <Link href="/work">TaskGrip</Link>. I&apos;m passionate about building
        software that&apos;s fast, smooth and responsive. I like when people
        feel something through my work.
      </p>
      <p className="pt-4 leading-5">
        Currently studying at a high school in the Czech Republic with a focus
        on Computer Science. My dream is to study at college in the US.
      </p>
      <p className="pt-4 leading-5">
        I am a person with an open-minded mindset who loves challenges, learning
        and trying new things.
      </p>

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
