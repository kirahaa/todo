import Vue from 'vue';
import Vuex from 'vuex';
import getDate from '../assets/commonJS/getDate';
// FIXME :; 게터 이름을 예약어 (getters) 로 사용하지 말것.
import * as getData from "./modules/getters";

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        // 로컬 스토리지의 아이템 목록 뿌리기
        if(localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                  arr.push(
                    JSON.parse(localStorage.getItem(localStorage.key(i)))
                  );
                }
                // localStorage ? getItem() 메서드는 keyname을 인자로 keyValue를 리턴해준다.
                // localStorage는 컴퓨터의 하드 디스크같은 개념, 파일처럼 저장하고 꺼내서 사용하고 하는 느낌
                // store는 메모리의 느낌. localStorage 보다 더 빠르게 데이터를 주고받을 수 있음.
                // localstoage는 데이터를 핸들링하는 자체가 문제가 생길 수 있음
                // javascript는 비동기적 언어이기 때문에.!!!
                // localstorage는 왜,언제 쓰느냐.
                // localstorage는 text만 입력받을 수 있음.
                // Json.stringfy 로 string으로 바꿔줘서 이 과정을 계속해주면 굉장히 비효율적.
                // So. DB에 저장해야함. Axios를 사용해 backend API호출
                // API를 어느시점에 언제 불러와야하는지 항상 고려해야함.
                // API는 비용이 들기때문에.
                // 그 시점이라는 것은 여러가지 요구사항들을 고려해서 작업해야함.
                // App을 만들때는 소켓이라는 것을 사용해서 데이터를 주고받기때문에 그 시점이라는 것이 상관이 없긴함
                // API는 action에서 호출해야함. action은 외부(사용자 관점)에서 사용된다.
                // ex) button을 눌렀을때.
                // mutation에서 데이터를 자유롭게 만든 후, action에서 api에 데이터를 던져라
                // action은 사용자 행위. 
                // <input v-model="state.todolist" onInput="addTidoItem">
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
        todoOldestOrder: true
    },
    getters: getData,
    mutations: {
        addOneItem(state, todoItem) {
            // FIXME :: var는 사용하지 않음.
            let value = {
                item: todoItem,
                date: `${getDate().date} ${getDate().week}`,
                time: getDate().time,
                completed: false
            };

            localStorage.setItem(todoItem, JSON.stringify(value));
            state.todoItems.push(value);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            payload.todoItem.completed = !payload.todoItem.completed;
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        checkLeftItems(state) {
            state.todoItems.completed;
        },
        clearAllItem(state) {
            state.todoItems = [];
            localStorage.clear();
        },
        // 최신순 정렬
        sortTodoLatest(state) {
            // state.todoOldestOrder = false;
            state.todoItems.sort(function(a, b) {
                return b.time - a.time;
            })
        },
        // 오래된 순 정렬
        sortTodoOldest(state) {
            // state.todoOldestOrder = true;
            state.todoItems.sort(function(a, b) {
                return a.time - b.time;
            })
        }
    }
});
