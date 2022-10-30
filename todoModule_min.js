// const obj = {
//     q: "привет"
// }
// const str = JSON.stringify(obj);
// const bytes = new TextEncoder().encode(str);
// const blob = new Blob([bytes], {
//     type: "application/vnd.ms-excel;charset=utf-8"
// });

let data = [
    [123, "первая строка вторая колонка в кириллице"],
    [456, "вторая строка"]
];
data = data.map(function (el) {
    return [el[0], el[1]].join(' ') + "\r\n";
});
const blob = new Blob(data, {
    type: 'text/csv;charset=utf-8'
});

link.href = URL.createObjectURL(blob);


const todo = {
    questions_1: [
        "Контактные лица",
        "Подключена ли Ваша организация к сети Интернет",
        "Скорость передачи данных в локальной сети",
        "Беспроводная сеть Wi-Fi",
        "DNS сервер",
        "DHCP сервер",
        "Proxy сервер",
        "Служба каталогов LDAP",
        "Сервер электронной почты",
        "Сервер баз данных",
        "Сервер печати",
        "Антивирусная зашита ",
        "Файловый сервер ",
        "Терминальный сервер",
    ],
    questions_2: [
        "2222222",
        "222222222222222",
    ],
    questions_3: [
        "333333333",
        "333333333333333",
    ],
    questions_4: [
        "444444444",
        "444444444444444444",
    ],
    questions_5: [
        "555555555",
        "5555555555555555555",
    ],

    init(questionsBlockId) {
        let arr = [];
        switch (questionsBlockId) {
            case "block-0":
                arr = this.questions_1;
                break;
            case "block-1":
                arr = this.questions_2;
                break;
            case "block-2":
                arr = this.questions_3;
                break;
            case "block-3":
                arr = this.questions_4;
                break;
            case "block-4":
                arr = this.questions_5;
                break;
            default:
                arr = this.questions_1;
                break;
        }

        document.getElementById(`${questionsBlockId}-questions`).innerHTML = arr.map((title, index) =>
            `<li>
                <a href="#" class="add add__new add__new-${questionsBlockId}" data-id="${questionsBlockId}-${index}"> ${title} </a>
            </li>`
        ).join('');

        for (let index = 0; index <= arr.length; index++) {
            const fromStorage = JSON.parse(localStorage.getItem(`${questionsBlockId}-${index}`));
            if (fromStorage) {
                this.print(fromStorage, questionsBlockId);
            }
        }
        document.addEventListener('click', this.action.bind(this, questionsBlockId));
    },
    action(blockId, e) {
        const target = e.target;
        const actionBtnBlocks = document.querySelectorAll(`.todo__block_btn-${blockId}`);
        const btnOpenTodoInputContainer = document.querySelector(`.add__new-${blockId}`);
        const btnSaveUpdate = document.querySelector(`.todo__save_update-btn-${blockId}`);
        const todoContainer = document.querySelector(`.todo-input-${blockId}`);
        const btn = document.querySelector(`.todo__add-btn-${blockId}`);
        const question = document.querySelector(`#question-${blockId}`);

        if (target.classList.contains(`todo__action-${blockId}`)) {
            const action = target.dataset.todoAction;
            const elemItem = target.closest(`.todo__item-${blockId}`);

            if (action === `deleted-${blockId}`) {
                elemItem.dataset.todoState = action;
                let idItem = elemItem.dataset.id;
                localStorage.removeItem(idItem);
                elemItem.remove();
            }

            if (action === `update-${blockId}`) {
                elemItem.dataset.todoState = action;
                let idItem = elemItem.dataset.id;

                btn.classList.add('display__none');
                btnSaveUpdate.classList.remove('display__none');
                todoContainer.classList.remove('display__none');
                btnOpenTodoInputContainer.classList.add('display__none');
                elemItem.classList.add(`todo__item_deleteup-${blockId}`);

                actionBtnBlocks.forEach((e) => {
                    e.classList.add('display__none');
                })

                this.update(idItem, blockId);
            }
        }
        if (target.classList.contains(`todo__save_update-btn-${blockId}`)) {
            btnOpenTodoInputContainer.classList.remove('display__none');
            todoContainer.classList.add('display__none');
            btn.classList.remove('display__none');

            actionBtnBlocks.forEach((e) => {
                e.classList.remove('display__none');
            })

            const elemItem = document.querySelector(`.todo__item_deleteup-${blockId}`);
            let idItem = elemItem.dataset.id;
            this.addUpdate(idItem, blockId);

        }
        if (target.classList.contains(`add__new-${blockId}`)) {
            let questionText = target.textContent;
            question.value = questionText;
            question.dataset.id = target.dataset.id;

            target.classList.add('display__none');
            todoContainer.classList.remove('display__none');
            btnSaveUpdate.classList.add('display__none');
            btnOpenTodoInputContainer.classList.remove('display__none');
        }
        if (target.classList.contains(`todo__add-btn-${blockId}`)) {
            this.add(question.dataset.id, blockId);

            btnOpenTodoInputContainer.classList.add('display__none');
            todoContainer.classList.add('display__none');
            btnSaveUpdate.classList.remove('display__none');
        }
        if (target.classList.contains(`todo__cancel-btn-${blockId}`)) {
            btnOpenTodoInputContainer.classList.remove('display__none');
            todoContainer.classList.add('display__none');
            btnSaveUpdate.classList.remove('display__none');
        }
    },
    add(qId, blockId) {
        const elemText = document.querySelectorAll(`.todo__input_text-${blockId}`);
        let todoContent = {
            'id': qId,
        };

        elemText.forEach((element, index) => {
            if (element.value === undefined) {
                return;
            }
            todoContent[index] = element.value;
            element.value = '';
        })

        this.save(todoContent, todoContent.id);
    },

    create(obj, blockId) {
        return `<tr class="todo__item todo__item-${blockId}" data-id="${obj['id']}" data-todo-state="active">
            <td style="width: 200px;"> ${obj[0]} </td>
            <td style="width: 380px;"> ${obj[1]} </td>
            <td style = "width: 300px; position: relative;">
                ${obj[2]}
                <div class="todo__block_btn todo__block_btn-${blockId}">
                    <span class="todo__action todo__action_update fas fa-pencil-alt todo__action-${blockId}" data-todo-action="update-${blockId}"></span>
                    <span class="todo__action todo__action_delete far fa-trash-alt todo__action-${blockId}" data-todo-action="deleted-${blockId}"></span>
                </div>
            </td>
        </tr>`;

    },
    update(id, blockId) {
        let items = JSON.parse(localStorage.getItem(id));

        const question = document.querySelector(`#question-${blockId}`);
        const answer = document.querySelector(`#answer-${blockId}`);
        const comment = document.querySelector(`#comment-${blockId}`);

        question.value = items['0'];
        answer.value = items['1'];
        comment.value = items['2'];
    },

    addUpdate(id, blockId) {
        const elemText = document.querySelectorAll(`.todo__input_text-${blockId}`);
        let todoContent = {
            'id': id
        };

        elemText.forEach((element, index) => {
            if (element.value === undefined) {
                return;
            }
            todoContent[index] = element.value;
            element.value = '';
        })

        this.save(todoContent, todoContent.id);
    },
    save(obj, index) {
        localStorage.setItem(index, JSON.stringify(obj));
        this.getItem(index);
    },
    getItem(index) {
        let retrievedObject = localStorage.getItem(index);
        let parseItemsObj = JSON.parse(retrievedObject);

        this.print(parseItemsObj, this.getIndexFromId(index));
    },
    print(obj, blockId) {
        document.querySelector(`.todo__items-tbody-${blockId}`).insertAdjacentHTML('beforeend', this.create(obj, blockId));
        if (document.querySelector(`.todo__item_deleteup-${blockId}`)) {
            document.querySelector(`.todo__item_deleteup-${blockId}`).remove();
            return;
        }
    },
    getIndexFromId(id) {
        let arrId = id.split('-');
        return [arrId[0], arrId[1]].join('-');
    }
}
document.querySelectorAll('.modal__title').forEach((item) => {
    item.addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        todo.init(id);
    });
});