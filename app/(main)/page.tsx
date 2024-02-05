import { Container } from "@/components/ui/container";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    <>
      <Container >
        
      </Container>
    </>
  );
}
