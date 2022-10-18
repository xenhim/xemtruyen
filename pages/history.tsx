import { IComicHistory } from "@types";
import { IconClose } from "components/icons";
import { PATH } from "constants/path";
import useLocalStorage from "hooks/useLocalStorage";
import { Template } from "layouts";
import LayoutUser from "layouts/LayoutUser";
import { ComicGrid, ComicImage } from "modules/comic";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  // const [history] = useLocalStorage("history", []);
  const [history, setHistory] = useState<IComicHistory[]>([]);
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history") || "[]"));
  }, []);

  return (
    <>
      <Head>
        <title>Lịch sử xem - NetComic</title>
        <meta name="description" content="Lịch sử xem - NetComic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutUser>
        <Template
          title="Lịch sử xem"
          desc='Truyện chưa đọc sẽ hiển thị ở đầu danh sách, nhấn vào "Đã đọc" nếu truyện đọc rồi.'
        >
          <ComicGrid>
            {history?.map((comic: IComicHistory, index: number) => (
              <div key={index}>
                <div className="relative overflow-hidden rounded aspect-[2.2/3]">
                  <ComicImage src={comic.posterUrl} alt={comic.slug} />
                  <div className="absolute bottom-0 left-0 text-xs right-0 py-[5px] text-white bg-overlay flex items-center justify-between md:px-2 gap-x-[2px]">
                    <button className="flex items-center mx-auto gap-x-[2px] font-semibold">
                      <IconClose className="w-[18px] h-[18px]" fill="#fff" />
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <Link href={`${PATH.comic}/${comic.slug}`}>
                    <a className="mt-1 transition-all duration-200 md:text-base line-clamp-2 hover:text-blue29">
                      {comic.title}
                    </a>
                  </Link>
                  <Link href={`${PATH.comic}/${comic.chapterUrl}`}>
                    <a className="text-[13px] text-[#c0c0c0] mt-[2px] transition-all duration-200 hover:text-blue29 block">
                      Đọc tiếp {comic.chapterName}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </ComicGrid>
        </Template>
      </LayoutUser>
    </>
  );
};

export default HistoryPage;