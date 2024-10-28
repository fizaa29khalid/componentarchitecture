import Link from "next/link";

export default function Navbar(){
    return(
        <div>
      <Link href="/">Home</Link><br/>
        <Link href="/About">About</Link><br/>
      <Link href="/Jobs">Jobs</Link><br/>
      <Link href="/Jobs/Coder">Coder</Link><br/>
      <Link href="/Contact">Contact</Link><br/>
      </div>
    )
}