import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const styleBtn = `w-60 border-2 m-2 bg-sky-600 border-sky-600 text-white p-2  hover:bg-sky-800 hover:border-sky-800`;
const urlImgExample =
  "https://media.istockphoto.com/id/1341432056/photo/furzton-lake-in-milton-keynes.jpg?s=2048x2048&w=is&k=20&c=E1rO10xehgQw2j6YKFIVxQiozVFLdnZXrNSonYij4wo=";

export default function ShowImgGithub() {
  const [input, setInput] = useState("b310l");
  const [url, setUrl] = useState("https://api.github.com/users/" + input);
  const [data, setData] = useState({});
  const [src, setSrc] = useState(urlImgExample);
  const [fetchSuccess, setFetchSuccess] = useState();

  // https://api.github.com/users/b310l
  const inp = useRef();
  useEffect(() => {
    // console.log(url);

    // const user = "b310l";
    // const pass = "b310lb310l";
    // axios({
    //   method: "get",
    //   url: `https://api.github.com/repos/${user}/<reponame>`,
    //   headers: {
    //     Authorization: `Bearer ${githubToken}`,
    //     "Content-Type": "application/json",
    //   },
    //   auth: {
    //     username: user,
    //     password: pass,
    //   },
    // })
    //   .then((res) => {
    //     callback(null, {
    //       statusCode: 200,
    //       body: JSON.stringify(res.data),
    //     });
    //   })
    //   .catch((err) => {
    //     callback(err);
    //   });

    axios
      .get(url)
      .then((res) => {
        setFetchSuccess(true);
        setData(res);
        console.log(url);
        setSrc(res.data.avatar_url);
      })
      .catch((err) => {
        setFetchSuccess(false);
        console.log(err);
      });
  }, [input]);
  const handleBtn = () => {
    setInput(inp.current.value);
    setUrl("https://api.github.com/users/" + inp.current.value);
    fetchSuccess && setSrc(data.data.avatar_url);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={inp}
        type="text"
        name="text"
        className="border-2 border-sky-600 p-2 m-2 focus:outline-sky-700 w-60 "
        id=""
        onChange={(e) => {
          setInput(e.target.value);
          setUrl("https://api.github.com/users/" + e.target.value);
        }}
      />
      <button onClick={handleBtn} className={styleBtn}>
        submit
      </button>

      <img
        src={src}
        width="300px"
        height="30px"
        className=" transition-all ease-in-out delay-150  hover:transition hover:filter duration-300 hover:blur-sm	"
      ></img>
      <p>{!fetchSuccess && "error fetching"}</p>
      <Link href="/">back to home</Link>
    </div>
  );
}
