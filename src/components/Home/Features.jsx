import "./Features.css"
import Feature1 from "../../assets/feature1.jpeg"
import Feature2 from "../../assets/feature2.jpeg"
import Feature3 from "../../assets/feature3.jpeg"
import Feature4 from "../../assets/feature4.jpeg"
import Feature5 from "../../assets/feature5.jpeg"

const Features = () => {
  return (
    <div className='Features-main'>
    <div className="features-page">
                  
                  <div className="features-header">
                        <h6>FEATURES</h6>
                        <h4>Key features of the product</h4>
                        <p>It will be a simple as occidental in fact, it will be Occidental.</p>
                  </div>

                  <div className="features-bottom">
                             <div className="feature1">
                                <div className="f-left">
                                    <img src={Feature1} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>ERPで実現する、ビジネスの一元管理と業務効率化</h6>
                                    <p>ERPは、企業の全業務プロセスを統合管理する包括的なソリューションで
す。財務、人事、生産、在庫、顧客管理などの業務機能を一元化し、リアルタ
イムでのデータ活用と意思決定を可能にします。
サインタのERPシステムは、モジュール型の柔軟な構造により、企業特性に
応じたカスタマイズが可能です。業務効率の最大化と経営判断の質向上を
通じて、企業の持続的な競争優位性の確立を支援します。</p>
                                </div>
                             </div>

                             <div  className="feature2">
                                <div className="f-left">
                                    <img src={Feature2} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>終わりなき革新：ユーザーと共に歩むサインタの理念</h6>
                                    <p>サインタは、代表取締役サンタナム・理志が提唱する「ユーザーファースト」と
いう揺るぎない理念を礎に、革新への果てなき挑戦を続けています。この理
念は、顧客の声を企業活動の中心に据え、真のニーズに応える価値を創造
することを意味します。
新興企業としての機動力と柔軟性を強みに、私たちは顧客との対話を通じ
て得られる意見を、製品開発とサービス革新に直接反映させています。顧
客からのフィードバックを成長の糧とし、常に進化を続けるソリューションを
提供することで、ビジネスの新たな可能性を切り拓きます。
サインタは、この不断の革新と顧客との共創により、次世代の業界スタン
ダードを確立し、デジタル社会の発展に貢献してまいります。</p>
                                </div>
                             </div>

                             <div className="feature1">
                                <div className="f-left">
                                    <img src={Feature3} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>ERPがもたらす企業変革 ―競争優位性の確立へ―</h6>
                                    <p>現代のビジネス環境において、ERPの導入は企業の成長戦略に不可欠
な要素となっています。サインタのERPソリューションは、企業データの一
元管理を実現し、経営判断の質を飛躍的に向上させます。
日常業務の自動化により解放された人的リソースは、より戦略的な活動
へと転換が可能となります。また、リアルタイムでのデータ分析と可視化に
より、市場変化への迅速な対応と的確な意思決定を支援します。
サインタは、最新のテクノロジーと業務知見を融合させた包括的なERPソ
リューションを提供し、お客様のビジネス変革と持続的な成長を支えます。
デジタル時代の競争優位性は、ERPによる業務革新から始まります。</p>
                                </div>
                             </div>

                             <div  className="feature2">
                                <div className="f-left">
                                    <img src={Feature4} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>サインタ・コミュニティへようこそ</h6>
                                    <p>サインタは、製品やサービスの提供にとどまらない、真のパートナーシップ
を目指しています。当社が運営するコミュニティフォーラムは、ユーザー同
士の知見共有や、開発チームとの直接対話を可能にする革新的なプラット
フォームです。
カスタマーサポートに加え、フォーラムを通じた双方向のコミュニケーショ
ンにより、製品開発やサービス改善に関する貴重な洞察を得ています。
ぜひサインタ・コミュニティに参加し、次世代のソリューション創造にご参
画ください。[コミュニティに参加する] 
※フォーラムは製品利用の有無に関わらず、どなたでもご利用いただけます。 </p>
                                </div>
                             </div>

                             <div className="feature1">
                                <div className="f-left">
                                    <img src={Feature5} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>共に描く、ビジネスの新たな地平線</h6>
                                    <p>私たちサインタは、お客様一社一社の成功が、よりよい社会の実現につなが
ると信じています。卓越したソフトウェアソリューションを通じて、お客様のビ
ジネスの可能性を最大限に引き出し、新たな価値創造をサポートすることが
私たちの使命です。
お客様の成長に寄り添い、共に歩むパートナーとして、最高品質のサービス
と革新的なソリューションを提供させていただくことは、私たちの誇りであり、
喜びです。
より詳しい情報は「よくある質問」をご覧ください。皆様とともに、輝かしい未
来を切り拓いてまいります。</p>
                                </div>
                             </div>

                  </div>

</div>
</div>
  )
}

export default Features