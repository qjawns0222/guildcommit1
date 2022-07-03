import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../carddata.json";
import { guildget } from "../store/actions/action";
import { RootState } from "../store/reducers";
import { CounterState } from "../store/types/state";

const Home: NextPage = () => {
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  const [arr, setArr]: [any, any] = useState([]);
  const [arr1, setArr1]: [any, any] = useState([
    { user: "start", count: "123" },
  ]);
  const [arr2, setArr2]: [any, any] = useState([]);
  useEffect(() => {
    setArr([...main.guild]);
    setArr1([...main.guild]);
  }, [arr, arr1]);
  const dispatch = useDispatch();
  const btnclick = () => {
    const id: String = dataref.current!.value.replaceAll('"', "");

    const input = cheuse(id);
    const input1 = cheuse(id);

    input1.map((a: any) => {
      let che = 0;
      main.guild.map((g: any) => {
        if (a.user == g.user) {
          a.count = a.count - g.count;
        }
      });
    });
    setArr2(input1);

    input.map((a: any) => {
      let che = 0;
      main.guild.map((g: any) => {
        if (a.user == g.user) {
          g.count = a.count;
          che++;
        }
      });
      if (che <= 0) {
        arr.push(a);
      }
    });
    console.log(arr);
    dispatch(guildget(arr));
  };

  const dataref: any = useRef<HTMLInputElement>(null);

  function cheuse(id: String) {
    const re = id.split("\n");
    const ref = re.map((a: String) => {
      const ref = a.split("    ");
      return ref;
    });
    let arr: any = [];
    const refm = ref.map((a: any) => {
      a = a.filter((a: Object, index: any) => {
        if (index % 2 == 1) {
          return a;
        }
      });

      return a;
    });

    refm.map((a: String) => {
      let ob = {
        user: a[0].replaceAll('"', ""),
        count: a[1].replaceAll('"', ""),
      };
      arr.push(ob);
    });

    return arr;
  }
  return (
    <div className="App">
      <div className="wrap">
        <div className="put">
          입력:
          <textarea ref={dataref}></textarea>
          <button onClick={btnclick}>클릭</button>
        </div>
        <div className="out">
          <div className="all">
            <div className="left">사용자</div>
            <div className="right">뱉어야되는거</div>
          </div>

          {arr2.map((a: any, index: any) => {
            return (
              <div key={index} className="all">
                <div className="left">{a.user}</div>
                <div className="right">{a.count}</div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .wrap {
            display: flex;
            justify-content: space-around;
            width: 100%;
          }
          .put {
            width: 50%;
          }
          .put * {
            width: 60%;
          }
          .put textarea {
            height: 50%;
          }
          .put button {
            margin-left: 5%;
          }
          .out {
            width: 50%;
          }
          .out * {
            border: 1px solid black;
          }
          .all {
            display: flex;
            width: 60%;
          }
          .left,
          .right {
            min-width: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
