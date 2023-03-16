<<<<<<< HEAD
import { tr } from 'date-fns/locale'
import MilisecondConverterToMinAndSec from './MilisecondConverterToMinAndSec'
import React, { useEffect, useRef, useState } from 'react'
import { MdExpandMore, MdOutlineCancel } from 'react-icons/md'
import { BiUpArrowAlt } from 'react-icons/bi'
import { FaBell } from 'react-icons/fa'
=======
import { tr } from "date-fns/locale";
import React, { useEffect, useRef, useState } from "react";
import { MdExpandMore, MdOutlineCancel } from "react-icons/md";
import { FaBell } from "react-icons/fa";
>>>>>>> parent of 36a2af3 (todo edit)

import Lottie from "lottie-react";
import TickLottie from '../public/Lottie/Tick.json';

const updateState = (item) => {
  const newState = listItem.map(obj => {
    // 👇️ if id equals 2, update country property
    if (obj.id === item.id) {
      return {...obj, country: 'Denmark'};
    }
    // 👇️ otherwise return the object as is
    return obj;
  });
  setListItem(newState);
};

const MyTodo = () => {
<<<<<<< HEAD
  // const [offset, setOffset] = useState(0);
  //   useEffect(() => {
        //       const onScroll = () => setOffset(window.pageYOffset);
  //       // clean up code
  //       window.removeEventListener('scroll', onScroll);
  //       window.addEventListener('scroll', onScroll, { passive: true });
  //       return () => window.removeEventListener('scroll', onScroll);
  //   }, []);

    // console.log(offset); 

    
  const inpTitle = useRef()
  const inpText = useRef()
  const inpTime = useRef()
  const inpDate = useRef()
  const inpEditTitle = useRef()
  const inpEditText = useRef()
  const inpEditTime = useRef()
  const inpEditDate = useRef()
=======
  const checkbox = useRef();

  const pLongText = useRef();

  const inpTitle = useRef();
  const inpText = useRef();
  const inpTime = useRef();
  const inpDate = useRef();
  const inpEditTitle = useRef();
  const inpEditText = useRef();
  const inpEditTime = useRef();
  const inpEditDate = useRef();
>>>>>>> parent of 36a2af3 (todo edit)
  useEffect(() => {
    inpTitle.current.focus();
  }, []);

  const [editing, setEditing] = useState(false);
  const [editWithId, setEditWithId] = useState();
  const [today, setToday] = useState(555);

  const [ToDoItem, setTodoItem] = useState({
    title: "mesal",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    time: new Date().toTimeString().substring(0, 8),
    date: new Date().toISOString().substring(0, 10),
    dateTime: new Date(),
    done: false,
    id: 0,
<<<<<<< HEAD
    cancelModalClick: null,
    modalActive: null,
  })
  // {id:null,timeOut:null}
 
  const [intervals, setIntervals] = useState([])
  const sectionOfChangeRemainingTime=useRef([])

  const [listItem, setListItem] = useState([ToDoItem])


  
  const [numberId, setNumberId] = useState(listItem.length)
=======
    timerOut: null,
  });
  const [listItem, setListItem] = useState([ToDoItem]);
  useEffect(() => {}, [listItem]);
  const [numberId, setNumberId] = useState(listItem.length);
>>>>>>> parent of 36a2af3 (todo edit)

  const addTodo = async (e) => {
    e.preventDefault();
    setNumberId(numberId + 1);
    let Time = inpTime.current.value;
    if (Time.length <= 5) {
      Time = Time + ":00";
    }
    console.log(Time);
    const newTodo = {
      title: inpTitle.current.value,
      text: inpText.current.value,
      time: Time,
      date: inpDate.current.value,
      dateTime: new Date(),
      done: false,
      id: numberId,
      readMore: false,
<<<<<<< HEAD
      cancelModalClick: null,
      modalActive: null,
    }
    setTodoItem(newTodo);
    const updatedList = [...listItem]
    updatedList.push(newTodo)
    console.log('updatedList   : ' + updatedList)
    setListItem(updatedList)
    inpTitle.current.value = ''
    inpText.current.value = ''
    inpTime.current.value = ''
    inpDate.current.value = ''
  }
=======
      modalClick: null,
      timerOut: null,
    };
    const updatedList = [...listItem];
    updatedList.push(newTodo);
    console.log("updatedList   : " + updatedList);
    setListItem(updatedList);
    inpTitle.current.value = "";
    inpText.current.value = "";
    inpTime.current.value = "";
    inpDate.current.value = "";
  };
>>>>>>> parent of 36a2af3 (todo edit)
  const editInpTodo = (e, item) => {
    e.preventDefault();

<<<<<<< HEAD
    const newState = listItem.map((obj) => {
      if (obj.id == item.id) {
        obj.title = inpEditTitle.current.value
        obj.text = inpEditText.current.value
        obj.time = inpEditTime.current.value
        obj.date = inpEditDate.current.value
        return obj
      } 
      return obj;
    })

    setListItem(newState);
    setEditing(false)
    setEditWithId(null)
   
  }
=======
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.title = inpEditTitle.current.value;
        newItem.text = inpEditText.current.value;
        newItem.time = inpEditTime.current.value;
        newItem.date = inpEditDate.current.value;
        return newItem;
      } else {
        return newItem;
      }
    });
    setEditing(false);
    setEditWithId(null);
    setListItem(UpdatedList);
  };
>>>>>>> parent of 36a2af3 (todo edit)

  const editTodo = (item) => {
    setEditing(true);
    setEditWithId(item.id);
  };

  
  const removeTodo = (id) => {
    const updatedList = [...listItem].filter((item) => item.id !== id);
    console.log("updatedList" + JSON.stringify(updatedList));
    console.log("listItem" + JSON.stringify(listItem));
    setListItem(updatedList);
  };

  const checkBoxClick = (item) => {
<<<<<<< HEAD
    const newState = listItem.map((obj) => {
      if (obj.id == item.id) {
        obj.done = !item.done;
        return obj
      } 
      return obj;
    })

    setListItem(newState);
    
    
  }
  const yesClick=(item)=>{
    const newState = listItem.map((obj) => {
      if (obj.id == item.id) {
        obj.done = true;
        return obj
      } 
      return obj;
    })

    setListItem(newState);
    // checkbox.current.checked;
    // console.log(checkbox);
  }

  const moreClick = (item) => {
    const newState = listItem.map((obj) => {
      if (obj.id == item.id) {
        obj.readMore = !item.readMore;
        return obj
      } 
      return obj;
    })

    setListItem(newState);
  }
=======
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.done = !item.done;
        return newItem;
      } else {
        return newItem;
      }
    });
    setListItem(UpdatedList);
  };

  const moreClick = (item) => {
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.readMore = !item.readMore;
        return newItem;
      } else {
        return newItem;
      }
    });
    setListItem(UpdatedList);
  };
>>>>>>> parent of 36a2af3 (todo edit)
  function diff(item) {
    // start = start.split(":");
    let now = new Date().toTimeString().substring(0, 9);
    let dateTime = item.time;
    if (dateTime.length <= 5) {
      dateTime = dateTime + ":00";
    }
    const [h, m, s] = dateTime.split(":");
    const [hNow, mNow, sNow] = now.split(":");
    let dateTimeTomiliSecond =
      parseInt(h) * 60 * 100000 + parseInt(m * 100000) + parseInt(s * 1000);
    let nowTomiliSecond =
      parseInt(hNow) * 60 * 100000 +
      parseInt(mNow * 100000) +
      parseInt(sNow * 1000);
    console.log("now " + now);
    console.log("dateTime " + dateTime);

<<<<<<< HEAD
    return (nowTomiliSecond - dateTimeTomiliSecond)>0 &&(nowTomiliSecond - dateTimeTomiliSecond)
=======
    return nowTomiliSecond - dateTimeTomiliSecond;
>>>>>>> parent of 36a2af3 (todo edit)
    // console.log('dateTimeTomiliSecond  '+dateTimeTomiliSecond);
    // console.log('nowTomiliSecond '+nowTomiliSecond);
    // console.log('difrence is '+(dateTimeTomiliSecond-nowTomiliSecond));
    // var diff = endDate.getTime() - startDate.getTime();
    // var hours = Math.floor(diff / 1000 / 60 / 60);
    // diff -= hours * 1000 * 60 * 60;
    // console.log(diff);
    // return diff;
    // var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    // if (hours < 0)
    //    hours = hours + 24;

    // return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
  }
  // const convertToTime=(x)=>{
  //   const hour=parseInt(x.slice(0,3));
  //   const min=parseInt(x.slice(3));
  //   const distance=new Date();
  //   console.log(hour," ",min," ",distance.getTime()+" ",distance)
  // }

<<<<<<< HEAD

  const MilisecondConverterToMinAndSec = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    if (minutes>=0  && seconds>=0) {
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    else return '00:00'
  
}

  const intervalSetSetting=(item)=>{

    const sTime=new Date();
    const distanceTime=sTime-item.dateTime;
    let dis=distanceTime;
    const countInterval=setInterval(() => {
      dis=dis-1000;                     
      console.log('remind id= ' +item.id);
      console.log('Intervals = ' +intervals);
      sectionOfChangeRemainingTime.current[item.id].textContent=MilisecondConverterToMinAndSec(dis);
    
      if (dis<=0) {
        setTimeout(() => {
          cancelReminder(item);
          const UpdatedList = listItem.map((newItem, i) => {
            if (newItem.id == item.id) {
              newItem.modalActive = true
              return newItem
            } 
            return newItem
            
          })
          setListItem(UpdatedList)
        }, dis);
        
       }
     }, 1000);
     const newInterval = listItem.map((objInterval) => {
      if (objInterval.id == item.id) {
        objInterval.id = countInterval;
        return objInterval
      } 
      return objInterval;
    })
    setIntervals(newInterval)
     
  }
  const clearListInterval=(item)=>{
    listItem.map((objInterval) => {
      if (objInterval.id == item.id) {
        clearInterval(objInterval.id)
         
      } 
      return;
    })
  }

  const remindeMe = (item) => {
    

    intervalSetSetting(item);
    
     const UpdatedList3 = listItem.map((obj, i) => {
      if (obj.id == item.id) {
        obj.cancelModalClick = true
        return obj;
      } 
      return obj;    })
    setListItem(UpdatedList3)
    console.log(diff(item))
  }

  

  const cancelReminder = (item) => {
    clearListInterval(item);
    console.log('cancelReminder')
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.cancelModalClick = null
        return newItem
      } 
      return newItem
      
    })
    setListItem(UpdatedList)
  }
  const exitModal = (item) => {
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.modalActive = false
        return newItem
      } 
      return newItem
      
    })
    setListItem(UpdatedList)
  }

const [randColor,setRandColor] =useState('rgb(0,0,0');
  useEffect(() => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const color=Math.floor(Math.random() * (max - min) + min);
      return color;
    }
    
      const rgb=`rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`;
      
      setRandColor(rgb);
      console.log(randColor);
    
    
  }, [...listItem.map(item => item.cancelModalClick)])
    
   //return
=======
  const [modalActiv, setModalActive] = useState(false);
  const remindeMe = (item) => {
    const timeOutSet = setTimeout(() => {
      console.log("reminder with id" + item.id);

      const UpdatedList2 = listItem.map((newItem, i) => {
        if (newItem.id == item.id) {
          newItem.modalClick = false;
          return newItem;
        } else {
          return newItem;
        }
      });
      setListItem(UpdatedList2);
      setModalActive(true);
    }, diff(item));
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.modalClick = true;
        newItem.timerOut = timeOutSet;
        return newItem;
      } else {
        return newItem;
      }
    });
    setListItem(UpdatedList);

    console.log(diff(item));

    // return clearTimeout(timerOut);
  };
  const cancelReminder = (item) => {
    console.log("cancelReminder");
    clearTimeout(item.timerOut);
    const UpdatedList = listItem.map((newItem, i) => {
      if (newItem.id == item.id) {
        newItem.modalClick = null;
        return newItem;
      } else {
        return newItem;
      }
    });
    setListItem(UpdatedList);
  };
  const exitModal = () => {
    setModalActive(false);
  };
  //return
>>>>>>> parent of 36a2af3 (todo edit)
  return (
    <div className="m-1 md:m-2 dark:bg-gray-800 ">
      {/* <button className="my-button" onClick={() => console.log(listItem)}>show list</button> */}
<<<<<<< HEAD
=======

      <div className={`${modalActiv ? "" : "invisible"} modal flex flex-col`}>
        <MdOutlineCancel
          className="text-white text-3xl m-2 self-end"
          onClick={exitModal}
        />
        <div className="flex flex-col justify-center  p-10">
          <p className="text-4xl text-white self-center">Time has Ended</p>
          <p className=" self-center text-white">reminder finished!</p>
        </div>
      </div>

>>>>>>> parent of 36a2af3 (todo edit)
      <form action="" onSubmit={addTodo} className="">
        {/*  */}
        <fieldset className="  rounded-sm p-2 bg-transparent border-gray-400  border-2  flex flex-col  lg:flex-row   ">
          <legend className=" my-button px-4 text-xs py-2 ">To Do</legend>
          <div className=" group relative flex flex-col lg:flex-row ">
            <input
              type="inpTitle"
              name=""
              id=""
              ref={inpTitle}
              required
              className="peer "
              maxLength={40}
            />
            <label
              htmlFor="inpTitle"
              className="absolute
               "
            >
              Type title
            </label>
          </div>
          <div className="group  w-full relative flex flex-col lg:flex-row res">
            <textarea
              rows="4"
              className="w-full  peer   min-h-[48px] "
              type=""
              name=""
              id="inpText"
              ref={inpText}
              required
            />
            <label htmlFor="inpText" className="absolute">
              Type text
            </label>
          </div>
          <div className="flex gap-1">
            <input
              className="w-full"
              type="time"
              step={1}
              name=""
              id=""
              ref={inpTime}
              placeholder="Time: "
            />
            <button
              className="my-button text-xs self-stretch  my-2 "
              onClick={(e) => {
                console.log(new Date().toTimeString().substring(0, 8));
                e.preventDefault();
                inpTime.current.value = new Date()
                  .toTimeString()
                  .substring(0, 8);
              }}
            >
              now
            </button>
          </div>
          <div className="flex gap-1">
            <input
              className="w-full"
              type="date"
              name=""
              id=""
              ref={inpDate}
              placeholder="Date: "
            />
            <button
              className="my-button text-xs self-stretch  my-2 "
              onClick={(e) => {
                e.preventDefault();

                inpDate.current.value = new Date()
                  .toISOString()
                  .substring(0, 10);
              }}
            >
              now
            </button>
          </div>

          <div className="flex justify-center m-0 text-xs">
            <button className="my-button my-0 py-2 " type="submit">
              Add
            </button>
          </div>
        </fieldset>
      </form>
      {/* iran time */}
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      
      <ul className="">
      {/* lg:grid lg:grid-cols-2 lg:gap-4 */}
        {listItem.map((item, index) => {
          return (
<<<<<<< HEAD
            <div key={item.id}>
              <div
                  style={{backgroundColor:randColor}}
                className={`${
                  item.modalActive
                    ? `  `
                    : 'invisible'
                } modal flex flex-col items-center text-center shadow-2xl shadow-current  `} 
              > <div className='flex justify-end w-full z-[53]'> 
                <MdOutlineCancel
                  className="text-white text-2xl hover:text-black m-2 self-end z-50 cursor-pointer "
                  onClick={() => exitModal(item)}
                /></div>
               
                <div className="flex flex-col justify-center  items-center z-[53] ">
                
                <h1 className=" self-center text-white text-4xl mb-6 ">Reminder finished!</h1>
                  <p className="text-2xl text-white   flex">
                    Time of <span className='teal-block inline m-0 py-0 mx-2 transition-none  before:transition-none  '>{item.title}</span> has arrived.
                  </p>
                  <div className='flex flex-col justify-around shadow-sm shadow-current  my-4 p-4 rounded-lg bg-gradient-to-b from-gray-800  to-gray-700'>
                    <p className='text-white'>do you want to check done this Task?</p>
                    <div className='flex justify-around  my-4'>
                    <button className='my-button px-8 py-2 ' onClick={()=>exitModal(item)}>No</button>
                    <button className='my-button px-8 py-2' onClick={()=>{yesClick(item);exitModal(item)}}>Yes</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <li
                className="flex items-center list-none border-2 border-gray-400 bg--500 rounded-sm p-2 text-center w-full     my-2"
                key={item.id}
              >
                {editing && editWithId == item.id ? (
                  <div>
                    <form
                      className="flex flex-col my-1"
                      action=""
                      onSubmit={(e) => editInpTodo(e, item)}
                    >
                      <div className="flex flex-col mx-2">
                        <label htmlFor="editTitle">Title:</label>
                        <input
                          className="text-center"
                          ref={inpEditTitle}
                          type="text"
                          name=""
                          defaultValue={item.title}
                          id="editTitle"
                          required
                          maxLength={40}
                        />
                      </div>
                      <div className="flex flex-col m-2 ">
                        <label htmlFor="editText">Text:</label>
                        <textarea
                          className="w-full   "
                          ref={inpEditText}
                          type="text"
                          name=""
                          defaultValue={item.text}
                          id="editText"
                          required
                        />
                      </div>

                      <div className=" my-1 flex flex-row justify-between mx-2">
                        <label htmlFor="editTime">Time</label>
                        {console.log(item.time)}
                        <input
                          ref={inpEditTime}
                          type="time"
                          step={1}
                          name=""
                          defaultValue={item.time}
                          id="editTime"
                        />
                        <label htmlFor="editDate">Date</label>
                        <input
                          ref={inpEditDate}
                          type="date"
                          name=""
                          defaultValue={item.date}
                          id="editDate"
                        />
                      </div>

                      <button type="submit" className="my-button my-1">
                        save
                      </button>
                      <button
                        className="my-button"
                        onClick={() => setEditing(false)}
                      >
                        cancel
                      </button>
                      <button
                        className="my-button "
                        onClick={(e) => {
                          e.preventDefault()
                          inpEditTime.current.value = new Date()
                            .toTimeString()
                            .substring(0, 8)
                        }}
                      >
                        set time to now
                      </button>
                      {/* {new Date().toISOString().substring(0, 11)} */}
                      <button
                        className="my-button"
                        onClick={(e) => {
                          e.preventDefault()
                          inpEditDate.current.value = new Date()
                            .toISOString()
                            .substring(0, 10)
                        }}
                      >
                        set time to date
                      </button>
                    </form>
                  </div>
                ) : (
                  <div
                    className={`${item.done && 'grayscale '} rounded-t-none w-full items-center  backdrop-blur-sm border-none  transition-widt duration-1000 `
                      
                    }
                  >
                    
=======
            <li
              className="flex items-center list-none border-2 border-gray-400 bg--500 rounded-sm p-2 text-center w-full     my-2"
              key={index}
            >
              {editing && editWithId == item.id ? (
                <div>
                  <form
                    className="flex flex-col my-1"
                    action=""
                    onSubmit={(e) => editInpTodo(e, item)}
                  >
                    <div className="flex flex-col mx-2">
                      <label htmlFor="editTitle">Title:</label>
                      <input
                        className="text-center"
                        ref={inpEditTitle}
                        type="text"
                        name=""
                        defaultValue={item.title}
                        id="editTitle"
                        required
                        maxLength={40}
                      />
                    </div>
                    <div className="flex flex-col m-2 ">
                      <label htmlFor="editText">Text:</label>
                      <textarea
                        className="w-full   "
                        ref={inpEditText}
                        type="text"
                        name=""
                        defaultValue={item.text}
                        id="editText"
                        required
                      />
                    </div>
>>>>>>> parent of 36a2af3 (todo edit)

                    <div className=" my-1 flex flex-row justify-between mx-2">
                      <label htmlFor="editTime">Time</label>
                      {console.log(item.time)}
                      <input
                        ref={inpEditTime}
                        type="time"
                        step={1}
                        name=""
                        defaultValue={item.time}
                        id="editTime"
                      />
                      <label htmlFor="editDate">Date</label>
                      <input
                        ref={inpEditDate}
                        type="date"
                        name=""
                        defaultValue={item.date}
                        id="editDate"
                      />
                    </div>

                    <button type="submit" className="my-button my-1">
                      save
                    </button>
                    <button
                      className="my-button"
                      onClick={() => setEditing(false)}
                    >
                      cancel{" "}
                    </button>
                    <button
                      className="my-button "
                      onClick={(e) => {
                        e.preventDefault();
                        inpEditTime.current.value = new Date()
                          .toTimeString()
                          .substring(0, 8);
                      }}
                    >
                      set time to now
                    </button>
                    {/* {new Date().toISOString().substring(0, 11)} */}
                    <button
                      className="my-button"
                      onClick={(e) => {
                        e.preventDefault();
                        inpEditDate.current.value = new Date()
                          .toISOString()
                          .substring(0, 10);
                      }}
                    >
                      set time to date
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  className={
                    item.done
                      ? " rounded-t-none w-full items-center  backdrop-blur-sm border-none grayscale transition-all duration-1000"
                      : "rounded-t-none  items-end w-full  backdrop-blur-sm border-none transition-all duration-700 "
                  }
                >
                  {/* {<h1 className="font-bold">{item.done ? "done" : "unDone"}</h1>} */}

                  <h3
                    className=" inline-block  lg:w-1/3 teal-block-big  outline-4  mx-4 
                 w-4/5
                selection:bg-[#efb687] selection:text-black 
              
                  "
                  >
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  </h3>
                  <div className=" flex flex-col">
                    <MdExpandMore
                      onClick={() => moreClick(item)}
                      className={`t-1 self-center 
                hover:outline-2 hover:outline-white hover:outline text-white rounded-full 
                 bg-rose-500 duration-100 z-50  order-2 transition-all mt-2
                 ${item.readMore ? "rotate-180 " : ""}`}
                    />

<<<<<<< HEAD
                      <p
                        className={`relative order-1 overflow-y-scroll teal-block-big mx-1.5 font-normal  py-1.5 m-0 overflow-hidden transition-all duration-1000  h-full ${
                          item.readMore ? 'max-h-20  ' : 'max-h-9'
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>

                    <div className="flex flex-row justify-center py-2 content-[]">
                      <p className="teal-block  text-xs my-0">
                        Time: {item.time}
                      </p>
                      <p className="teal-block  text-xs my-0 ">
                        Date: {item.date}
                      </p>
                      <FaBell
                        className="self-center ml-1 text-2xl text-red-600 hover:text-red-700"
                        onClick={() => {remindeMe(item)} }
                      />

                      <span>
          
                        { (
                          <div className={` ${!item.cancelModalClick == true && 'hidden'} self-center flex h-full m-0 `}>
                            <span  className=" teal-block before:transition-none my-0 py-0 leading-loose" ref={el => sectionOfChangeRemainingTime.current[item.id] = el}>{MilisecondConverterToMinAndSec(new Date()-item.dateTime)}</span>
                            <MdOutlineCancel
                              onClick={() => cancelReminder(item)}
                              className="self-center ml-1 text-2xl  text-red-600 hover:text-red-700"
                            />
                          </div>
                        )}
                       
                      </span>
                    </div>
                    <div></div>
                    {editing ? (
                      <></>
                    ) : (
                      <div
                        className={
                          'rounded-t-none   -m-2 flex flex-row justify-evenly'
                        }
                      >
                        <button
                          className="my-button  h-10 self-center w-1/6 p-0"
                          onClick={() => {removeTodo(item.id);clearListInterval(item)}}
                        >
                          remove
                        </button>
                        
                        <div className='relative flex flex-row items-center '>
                           <input
                          className=" flex flex-row items-center appearance-none checkToDO"
                          // checkToDO
                          type="checkbox"
                          name="checkbox"
                          id=""
                          checked={item.done}
                          
                          onChange={() => checkBoxClick(item)}
                        />
                        <span className='absolute  pointer-events-none'>
                          
                        { item.done &&<Lottie animationData={TickLottie} loop={false}   />}

                        </span>

                        </div>
                       
                        
                       
                        <button
                          className="my-button  h-10 self-center w-1/6"
                          onClick={() => editTodo(item)}
                        >
                          edit
                        </button>
                        {/* <button onClick={()=>console.log(JSON.stringify(item))}>log item</button> */}
                      </div>
                    )}
=======
                    <p
                      className={`relative order-1  teal-block-big mx-1.5 font-normal  py-1.5 m-0 overflow-hidden transition-all duration-100  h-full ${
                        item.readMore ? "max-h-fit " : "max-h-9"
                      }`}
                    >
                      {item.text}
                    </p>
>>>>>>> parent of 36a2af3 (todo edit)
                  </div>

                  <div className="flex flex-row justify-center py-2 content-[]">
                    <p className="teal-block  text-xs my-0">
                      Time: {item.time}
                    </p>
                    <p className="teal-block  text-xs my-0 ">
                      Date: {item.date}
                    </p>
                    <FaBell
                      className="self-center ml-1 text-2xl text-red-600 hover:text-red-700"
                      onClick={() => remindeMe(item)}
                    />

                    <span>
                      {item.modalClick == null && ""}
                      {item.modalClick == true && (
                        <div className="self-center flex h-full  ">
                          <span className="ml-2">running...</span>
                          <MdOutlineCancel
                            onClick={() => cancelReminder(item)}
                            className="self-center ml-1 text-2xl  text-red-600 hover:text-red-700"
                          />
                        </div>
                      )}
                      {item.modalClick == false && "finished!"}
                    </span>
                  </div>
                  <div></div>
                  {editing ? (
                    <></>
                  ) : (
                    <div
                      className={
                        "rounded-t-none   -m-2 flex flex-row justify-evenly"
                      }
                    >
                      <button
                        className="my-button  h-10 self-center"
                        onClick={() => removeTodo(item.id)}
                      >
                        remove
                      </button>
                      <input
                        className="       "
                        // checkToDO
                        type="checkbox"
                        name=""
                        id=""
                        defaultChecked={item.done}
                        ref={checkbox}
                        onClick={() => checkBoxClick(item)}
                      />
                      <button
                        className="my-button  h-10 self-center"
                        onClick={() => editTodo(item)}
                      >
                        edit
                      </button>
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
<<<<<<< HEAD

  {/* offset>20 && */}
    {
      <BiUpArrowAlt className='my-button p-2  text-4xl h-fit w-fit text-white sticky bottom-0' onClick={handleClickScroll}/>    
    }
      </div>
  )
}
=======
    </div>
  );
};
>>>>>>> parent of 36a2af3 (todo edit)

export default MyTodo;
