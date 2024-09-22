import RuleModal from "@/template/auth/component/RuleModal";
import FlowerSVG from "@/template/auth/svg/FlowerSVG";
import LogoTypoSVG from "@/template/auth/svg/LogoTypoSVG";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth">
      <div className="auth-content">
        <div className="auth-content-wrap">
          <Link href="/">
            <LogoTypoSVG />
          </Link>
          <div className="auth-content-txt">
            <h3>
              با هر مبلغی بدون پرداخت اجرت و مالیات، طلا بخرید و بفروشید و در هر
              زمان تحویل بگیرید.
            </h3>
            <div>
              <span>پشتیبانی:</span>
              <span>
                {" "}
                شماره تماس :
                <span style={{ direction: "ltr" }}>۰۲۱-۹۱۰ ۹۶ ۱۹۵</span>
              </span>
              <span>رایانامه: support@goldika.ir</span>
              <FlowerSVG />
            </div>
          </div>
        </div>
      </div>
      <div className="auth-container">{children}</div>
      <RuleModal open={false} />
    </div>
  );
}
