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
                // localStorage는 컴퓨터의 디스크같은 개념, 파일처럼 저장하고 꺼내서 사용하고 하는 느낌
                // store는 메모리의 느낌. localStorage 보다 더 빠르게 데이터를 주고받을 수 있음.
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
            state.todoOldestOrder = false;
            state.todoItems.sort(function(a, b) {
                return b.time - a.time;
            })
        },
        // 오래된 순 정렬
        sortTodoOldest(state) {
            state.todoOldestOrder = true;
            state.todoItems.sort(function(a, b) {
                return a.time - b.time;
            })
        }
    }
});
