import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Stay Healthy</h1>

      {/* Button from AntD */}
      {/* <Button type="primary">Primary Button</Button> */}

      {/* Logo */}
      <Image src={'/logo.svg'} alt="Stay Healthy Logo" width={80} height={80} />
    </div>
  );
}
