import { BaseButton } from "./BaseButton";
import ScanIcon from "./Icon_Scan";
import Link from "next/link";

export default function StartScanButton() {
  return (
    <BaseButton className="bg-white w-16 h-16 flex items-center justify-center">
      <Link href="/scan">
        <div className="flex items-center justify-center">
          <ScanIcon />
        </div>
      </Link>
    </BaseButton>
  );
}
