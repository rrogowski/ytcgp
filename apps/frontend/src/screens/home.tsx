import { useState } from "react";
import { ALL_EXPANSIONS, getExpansionPacks } from "../data/expansions";
import favicon from "../images/logo.png";
import { useAllowance } from "../lib/allowance";
import { useRouter } from "../lib/router";
import { useWonderPicks } from "../lib/wonder-picks";
import { useProfile } from "../models/profile";

export const Home: React.FC = () => {
  const router = useRouter();
  const profile = useProfile();
  const allowance = useAllowance();
  const wonderPicks = useWonderPicks();

  const [expansionName, setExpansionName] = useState("Genesis");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "0.75rem",
        padding: "1rem",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={favicon} style={{ height: "5rem" }}></img>
        <span>{profile.data?.displayName}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <select
          value={expansionName}
          onChange={(event) => setExpansionName(event.currentTarget.value)}
        >
          {ALL_EXPANSIONS.map((expansion) => {
            return <option key={expansion.name}>{expansion.name}</option>;
          })}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {getExpansionPacks(expansionName).map((pack) => {
          return (
            <img
              key={pack.code}
              src={pack.imageUrl}
              style={{ height: "auto", padding: "0 0.5rem", width: "33.33%" }}
              onClick={() => router.navigate("/packs")}
            ></img>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <span>¥{profile.data?.money}</span>
          <button disabled={allowance.count === 0}>
            Claim Daily<br></br>Allowance
          </button>
          <span>{profile.data?.wonderPoints} ₩</span>
          <div style={{ position: "relative" }}>
            <button onClick={() => router.navigate("/wonder-pick")}>
              Wonder<br></br>Pick
            </button>
            {wonderPicks.hasNewPicks &&
              null
              // <span
              //   style={{
              //     backgroundColor: "red",
              //     borderRadius: "0.25rem",
              //     color: "white",
              //     fontSize: "0.6rem",
              //     padding: "0.25rem",
              //     pointerEvents: "none",
              //     position: "absolute",
              //     right: "-0.8rem",
              //     top: "-0.8rem",
              //   }}
              // >
              //   New
              // </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
