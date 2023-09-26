import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import Link from "next/link";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0x959bEC5Fdea1c61A700c1fbd8f71904C47D8cbAe",
    "edition-drop"
  );

  const { data: nfts, isLoading: nftsLoading } = useNFTs(contract);

  return (
    <div className={styles.container}>
      <div className={styles.heroBanner}>
        <div>
          <h1>Neymar Artwork</h1>
          <p>Buy some Neymar Artwork pieces</p>
        </div>
      </div>
      <div>
        {!nftsLoading && nfts && (
          <div className={styles.grid}>
            {nfts.map((nft) => (
              <Link href={`/artwork/${nft.metadata.id}`}>
                <div className={styles.artCard}>
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <div className={styles.cardContent}>
                    <h3>{nft.metadata.name}</h3>
                    <p>{nft.metadata.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
