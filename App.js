import React from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="app-container">
      <h1>IZ*ONE Profiles</h1>
      <WelcomeMessage name="Wiz*one" />
      <div className="card-container">
        <ProfileCard
          name="Eunbi (은비)"
          bio={
            <>
              <span style={{ backgroundColor: "#bbb0dc" }}>Stage Name:</span> Eunbi (은비)
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Birth Name:</span> Kwon Eun Bi (권은비)
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Position:</span> Leader, Main Dancer, Lead Vocalist
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Birthday:</span> September 27, 1995
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Zodiac Sign:</span> Libra
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Height:</span> 159 cm (5’3”)
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Weight:</span> 46 kg (101 lbs)
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Blood Type:</span> A
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>MBTI Type:</span> ENFP (210207 VLive)
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Instagram:</span> <a href="https://www.instagram.com/silver_rain.__/">@silver_rain.__</a> / <a href="https://www.instagram.com/official_kwon.eunbi/">@official_kwon.eunbi</a>
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Twitter:</span> <a href="https://x.com/kwoneunbi">@kwoneunbi</a>
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>TikTok:</span> <a href="https://www.tiktok.com/@official_kwoneunbi?">@official_kwoneunbi</a>
              <br />
              <span style={{ backgroundColor: "#bbb0dc" }}>Youtube:</span> <a href="https://www.youtube.com/channel/UCoCvj_VhZPOtttlJK7RCh2A">권은비 – KWON EUN BI</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/47/5/800/Kwon-Eunbi-3rd-Digital-Single-Hello-Stranger-Concept-Photos-documents-3.jpeg?v=57391"
        />
        <ProfileCard
          name="Sakura (咲良) (さくら) (사쿠라)"
          bio={
            <>
              <span style={{ backgroundColor: "#f1d2e7" }}>Stage Name:</span> Sakura (咲良) (さくら) (사쿠라) (은비)
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Birth Name:</span> Miyawaki Sakura (宮脇 咲良) (みやわき さくら) (미야와키 사쿠라)
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Position:</span> Sub Vocalist, Sub Rapper, Visual
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Birthday:</span> March 19, 1998
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Zodiac Sign:</span> Pisces
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Height:</span> 163 cm (5’4”)
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Weight:</span> 43 kg (94 lbs)
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Blood Type:</span> A
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>MBTI Type:</span> INFP (201103 Hi-touch)
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Instagram:</span> <a href="https://www.instagram.com/39saku_chan/">@39saku_chan</a>
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Twitter:</span> <a href="https://twitter.com/39saku_chan">@39saku_chan</a>
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Youtube:</span> <a href="https://www.youtube.com/channel/UC9Z0cgZPBa2szfJcrJdfYvA">Sakura's gaming channel</a> / <a href="https://www.youtube.com/channel/UCaXC-lJvzO-SEG_2rTwaLqQ">Sakura Miyawaki</a>
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>7Gogo:</span> <a href="https://7gogo.jp/miyawaki-sakura">miyawaki-sakura</a>
              <br />
              <span style={{ backgroundColor: "#f1d2e7" }}>Weibo:</span> <a href="https://www.weibo.com/u/6352047195?is_hot=1">Sakura</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/09/0/800/LE-SSERAFIM-5th-Mini-Album-HOT-Concept-Photos-documents-17.jpeg?v=02daf"
        />
        <ProfileCard
          name="Hyewon (혜원)"
          bio={
            <>
              <span style={{ backgroundColor: "#db706c" }}>Stage Name:</span> Hyewon (혜원)
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Birth Name:</span> Kang Hye Won (강혜원)
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Position:</span> Lead Rapper, Sub Vocalist, Visual
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Birthday:</span> July 5, 1999
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Zodiac Sign:</span> Cancer
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Height:</span> 163 cm (5’4”)
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Weight:</span> 43 kg (95 lbs)
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Blood Type:</span> B
              <br />
              <span style={{ backgroundColor: "#db706c" }}>MBTI Type:</span> ESFP/ISFP (200628 Fansign)
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Instagram:</span> <a href="https://www.instagram.com/hyemhyemu/">@hyemhyemu</a>
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Twitter:</span> <a href="https://twitter.com/hyemu_official">@hyemu_official</a>
              <br />
              <span style={{ backgroundColor: "#db706c" }}>Youtube:</span> <a href="https://www.youtube.com/channel/UCGsmowjz7ctm9jiKbnmF8EA">강혜원</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/12/1/800/250205-Friendly-Rivalry-Character-Photos-Kang-Hyewon-documents-1.jpeg?v=a6674"
        />
        <ProfileCard
          name="Yena (예나)"
          bio={
            <>
              <span style={{ backgroundColor: "#fcf695" }}>Stage Name:</span> Yena (예나)
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Birth Name:</span> Choi Ye Na (최예나)
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Position:</span> Main Rapper, Lead Vocalist, Lead Dancer
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Birthday:</span> September 29, 1999
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Zodiac Sign:</span> Libra
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Height:</span> 162 cm (5’3”)
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Weight:</span> 45 kg (99 lbs)
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Blood Type:</span> A
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>MBTI Type:</span> ENFP (Girl’s High School Mystery Club EP 0 Preview)
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Instagram:</span> <a href="https://www.instagram.com/yena.jigumina/">@yena.jigumina</a>
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Twitter:</span> <a href="https://twitter.com/yena_official">@yena_official</a>
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>TikTok:</span> <a href="https://www.tiktok.com/@choiyena.official">@choiyena.official</a>
              <br />
              <span style={{ backgroundColor: "#fcf695" }}>Youtube:</span> <a href="https://www.youtube.com/channel/UCkrDEGNM3mqZXHk2MfnOjMw">YENA(최예나)</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/e3/4/800/241008-Yuehua-Naver-Post-YENA-3rd-Single-Album-NEMONEMO-Jacket-Shoot-Behind-documents-5.jpeg?v=fc4be"
        />
        <ProfileCard
          name="Chaeyeon (채연)"
          bio={
            <>
              <span style={{ backgroundColor: "#a7e0e1" }}>Stage Name:</span> Chaeyeon (채연)
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Birth Name:</span> Lee Chae Yeon (이채연)
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Position:</span> Main Dancer, Lead Vocalist, Lead Rapper
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Birthday:</span> January 11, 2000
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Zodiac Sign:</span> Capricorn
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Height:</span> 165.2 cm (5’5”)
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Weight:</span> 47 kg (104 lbs)
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Blood Type:</span> A
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>MBTI Type:</span> ENFJ-T (190917 Private mail)
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Instagram:</span> <a href="https://www.instagram.com/chaestival_/">@chaestival_</a>
              <br />
              <span style={{ backgroundColor: "#a7e0e1" }}>Twitter:</span> <a href="https://twitter.com/official_lcy">@official_lcy</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/c8/5/800/241012-Lee-Chaeyeon-Instagram-Update-documents-2.jpeg?v=a6674"
        />
        <ProfileCard
          name="Chaewon (채원)"
          bio={
            <>
              <span style={{ backgroundColor: "#cee5d5" }}>Stage Name:</span> Chaewon (채원)
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Birth Name:</span> Kim Chae Won (김채원)
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Position:</span> Lead Vocalist, Lead Dancer
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Birthday:</span> August 1, 2000
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Zodiac Sign:</span> Leo
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Height:</span> 163.9 cm (5’4”)
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Weight:</span> 42 kg (92 lbs)
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Blood Type:</span> B
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>MBTI Type:</span> ISFP (IZ*ONE fandom)
              <br />
              <span style={{ backgroundColor: "#cee5d5" }}>Instagram:</span> <a href="https://www.instagram.com/_chaechae_1/">@_chaechae1_</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/2c/1/800/LE-SSERAFIM-5th-Mini-Album-HOT-Concept-Photos-documents-19.jpeg?v=491c7"
        />
        <ProfileCard
          name="Minju (민주)"
          bio={
            <>
              <span style={{ backgroundColor: "#f2f2f2" }}>Stage Name:</span> Minju (민주)
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Birth Name:</span> Kim Min Ju (김민주)
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Position:</span> Lead Rapper, Sub Vocalist, Visual
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Birthday:</span> February 5, 2001
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Zodiac Sign:</span> Aquarius
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Height:</span> 163.8 cm (5’4”)
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Weight:</span> 45 kg (99 lbs)
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Blood Type:</span> AB
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>MBTI Type:</span> INFJ (Hello Vogue)
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Instagram:</span> <a href="https://www.instagram.com/minn.__.ju/?hl=en">@minn._.ju</a>
              <br />
              <span style={{ backgroundColor: "#f2f2f2" }}>Twitter:</span> <a href="https://twitter.com/minju_official_">@minju_official_</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/f0/3/800/Minju-Interview-Photos-with-StarNewsKorea-documents-1.jpeg?v=5e500"
        />
        <ProfileCard
          name="Nako (奈子) (なこ) (나코)"
          bio={
            <>
              <span style={{ backgroundColor: "#b7d3e9" }}>Stage Name:</span> Nako (奈子) (なこ) (나코)
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Birth Name:</span> Yabuki Nako (矢吹奈子) (やぶき なこ) (야부키 나코)
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Position:</span> Sub Vocalist
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Birthday:</span> June 18, 2001
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Zodiac Sign:</span> Gemini
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Height:</span> 150 cm (4’11”)
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Weight:</span> 40 kg (88 lbs)
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Blood Type:</span> N/A
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>MBTI Type:</span> ISFJ-T (200315 Private mail)
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Instagram:</span> <a href="https://www.instagram.com/75_yabuki/">@75_yabuki</a>
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>Twitter:</span> <a href="https://twitter.com/nako_yabuki_75">@nako_yabuki_75</a>
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>7Gogo:</span> <a href="https://7gogo.jp/yabuki-nako">@yabuki-nako</a>
              <br />
              <span style={{ backgroundColor: "#b7d3e9" }}>TikTok:</span> <a href="https://www.tiktok.com/@nako_75_">@nako_75_</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/80/0/800/Nako-for-Daniel-Wellington-2023-documents-1.jpeg?v=a6674"
        />
        <ProfileCard
          name="Hitomi (仁美) (ひとみ) (히토미)"
          bio={
            <>
              <span style={{ backgroundColor: "#f1c3aa" }}>Stage Name:</span> Hitomi (仁美) (ひとみ) (히토미)
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Birth Name:</span> Honda Hitomi (本田仁美) (ほんだ ひとみ) (혼다 히토미)
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Position:</span> Lead Dancer, Sub Vocalist, Sub Rapper
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Birthday:</span> October 6, 2001
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Zodiac Sign:</span> Libra
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Height:</span> 159.2 cm (5’2”)
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Weight:</span> 44.4 kg (98 lbs)
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Blood Type:</span> A
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>MBTI Type:</span> ENTJ
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Instagram:</span> <a href="https://www.instagram.com/10_hitomi_06/">@10_hitomi_06</a>
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>Twitter:</span> <a href="https://twitter.com/hnd_htm__1006">@hnd_htm_1006</a>
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>7Gogo:</span> <a href="https://7gogo.jp/honda-hitomi">@honda-hitomi</a>
              <br />
              <span style={{ backgroundColor: "#f1c3aa" }}>TikTok:</span> <a href="https://www.tiktok.com/@hondahitomi_1006">@hondahitomi_1006</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/93/4/800/SAY-MY-NAME-THE-2nd-EP-My-Name-Is-CONCEPT-PHOTO-documents-19.jpeg?v=5bff1"
        />
        <ProfileCard
          name="Yuri (유리)"
          bio={
            <>
              <span style={{ backgroundColor: "#f3aa51" }}>Stage Name:</span> Yuri (유리)
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Birth Name:</span> Jo Yu Ri (조유리)
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Position:</span> Main Vocalist
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Birthday:</span> October 22, 2001
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Zodiac Sign:</span> Libra
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Height:</span> 163 cm (5’4”)
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Weight:</span> 45 kg (99 lbs)
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Blood Type:</span> AB
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>MBTI Type:</span> INFJ (IZ*ONE fandom)
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Instagram:</span> <a href="https://www.instagram.com/zo__glasss/">@zo__glasss</a> / <a href="https://www.instagram.com/joyuri_offcl/">@joyuri_offcl</a>
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Twitter:</span> <a href="https://twitter.com/JOYURI_offcl">@JOYURI_offcl</a>
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Facebook:</span> <a href="https://www.facebook.com/JOYURI.offcl/">JOYURI.offcl</a>
              <br />
              <span style={{ backgroundColor: "#f3aa51" }}>Youtube:</span> <a href="https://www.youtube.com/channel/UCSEVFgCkKem_c3nIBm7F37g">조유리 JO YURI</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/97/1/800/250328-Jo-Yuri-DAZED-Photoshoot-Mardi-Mercredi-Behind-Photos-documents-3.jpeg?v=1fb1e"
        />
        <ProfileCard
          name="Yujin (유진)"
          bio={
            <>
              <span style={{ backgroundColor: "#567ace" }}>Stage Name:</span> Yujin (유진)
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Birth Name:</span> Ahn Yu Jin (안유진)
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Position:</span> Lead Dancer, Lead Vocalist
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Birthday:</span> September 1, 2003
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Zodiac Sign:</span> Virgo
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Height:</span> 173 cm (5’8”)
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Weight:</span> 48 kg (106 lbs)
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Blood Type:</span> A
              <br />
              <span style={{ backgroundColor: "#567ace" }}>MBTI Type:</span> ISTP (IVE interviews)
              <br />
              <span style={{ backgroundColor: "#567ace" }}>Instagram:</span> <a href="https://www.instagram.com/_yujin_an/">@_yujin_an</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/d1/1/800/IVE-The-3rd-EP-%F0%9D%90%BC%F0%9D%91%89%F0%9D%90%B8-%F0%9D%90%B8%F0%9D%91%80%F0%9D%91%83%F0%9D%90%B4%F0%9D%91%87%F0%9D%90%BB%F0%9D%91%8C-CONCEPT-PHOTOS-documents-2(1).jpeg?v=c8721"
        />
        <ProfileCard
          name="Wonyoung (원영)"
          bio={
            <>
              <span style={{ backgroundColor: "#d9598c" }}>Stage Name:</span> Wonyoung (원영)
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Birth Name:</span> Jang Won Young (장원영)
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Position:</span> Lead Dancer, Sub Vocalist, Sub Rapper, Center, Maknae
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Birthday:</span> August 31, 2004
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Zodiac Sign:</span> Virgo
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Height:</span> 173 cm (5’8”)
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Weight:</span> 47 kg (104 lbs)
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Blood Type:</span> O
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>MBTI Type:</span> ENTJ
              <br />
              <span style={{ backgroundColor: "#d9598c" }}>Instagram:</span> <a href="https://www.instagram.com/for_everyoung10/">@for_everyoung10</a>
            </>
          }
          imageUrl="https://kpopping.com/documents/88/4/800/IVE-The-3rd-EP-%F0%9D%90%BC%F0%9D%91%89%F0%9D%90%B8-%F0%9D%90%B8%F0%9D%91%80%F0%9D%91%83%F0%9D%90%B4%F0%9D%91%87%F0%9D%90%BB%F0%9D%91%8C-CONCEPT-PHOTOS-documents-1.jpeg?v=c8721"
        />
      </div>
    </div>
  );
}

export default App;
