const todo = {
    questions_1: new Map([
        ["Контактные лица", "ФИО, Телефон, e-mail"],
        ["Ограничение доступа в интернет для пользователей", "Ограничение по полосе, ограничение по внешним ресурсам"],
        ["Скорость передачи данных в локальной сети", "Пропускная способность 10/100/1000"],
        ["Стандарт беспроводной сеть Wi-Fi", "802.11a, 802.11b, 802.11g, 802.11n"],
        ["Структура домена Active Directory", "Лес доменов, дерево доменов, один домен"],
        ["Подпадает ли инфраструктура под требования регуляторов (ФСТЭК, ФСБ)", "Да/Нет"],
        ["Сколько пользователей попадающих аттестацию рабочих мест/сегментов информационных систем по требованиям (ФСТЭК, ФСБ)", "Да/Нет"],
        ["Класс защищаемых информационных систем", "Указать класс"],
        ["Балансировка сетевой нагрузки", "Да/Нет"],
        ["Какие направления импортозамещения рассматриваются", "ОС серверов, ОС клиентских компьютеров, прикладное ПО, системы терминального доступа (VDI), БД, системы виртуализации, система резервного копирования, система управления корпоративной почтой"],
        ["Общее количество толстых клиентов (обычные раб. станции) в сети", "число"],
        ["Общее количество тонких клиентов в сети", "число"],
        ["Общее количество серверов в сети", "число"],
        ["Общее количество компьютеров на которые предполагается установка Astra Linux", "число"],
        ["Сроки окончания пилотного проекта", "дата"],
        ["Сроки окончания процесса опытного внедрения", "дата"],
    ]),
    questions_2: new Map([
        ["DHCP-сервер", "Позволяет автоматически получать IP-адрес и другие параметры, необходимые для работы в сети TCP/IP. Microsoft Windows Server, BIND, Dnsmasq,... Да / Нет "],
        ["Сервер управления IP-адресами (IPAM)", "IPAM представляет собой платформу для обнаружения, мониторинга, управления и аудита пространства IP адресов в сети организации. Да/Нет"],
        ["DNS-сервер", "Приложение, предназначенное для ответов на DNS-запросы по соответствующему протоколу. Microsoft Windows Server, BIND, Dnsmasq,… Да/Нет"],
        ["WINS-сервер", "Служба сопоставления NetBIOS-имён компьютеров с IP-адресами узлов. Да/Нет"],
        ["Протокол однорангового разрешения имен (PNRP)", "При использовании протокола PNRP имена одноранговых узлов могут назначаться компьютерам, отдельным приложениям или службам на компьютере. Процесс разрешения имен одноранговых узлов включает адрес, порт и, возможно, расширенные полезные данные. Да / Нет"],
        ["Контроль выхода в Интернет", "Программное решение, предназначенное для защиты сетевого периметра, контроля и фильтрации Интернет-трафика. UserGate, FortiGate, Ideco ICS, Kerio Control, Squid,…Да/Нет"],
        ["Служба каталогов LDAP", "Это базы данных, хранящие в себе информацию о пользователях, узлах и объектах сети. Цель их создания - упростить администрирование. FreeIPA, Microsoft Active Directory, OpenLDAP, Samba4… Да/Нет"],
        ["Службы управления правами Active Directory", "Это серверное программное обеспечение для управления правами на информацию, поставляемое с Windows Server. Он использует шифрование и форму выборочного отказа в функциональности для ограничения доступа к таким документам, как корпоративная электронная почта, документы Microsoft Word и веб-страницы, и операции, которые авторизованные пользователи могут выполнять с ними. Да/Нет"],
        ["Службы федерации Active Directory", "Это компонент Windows Server обеспечивающий функционал провайдера аутентификации для веб-приложений. Службы федерации AD используются для аутентификации внешних пользователей в приложениях. Да/Нет"],
        ["Система виртуализации", "Предоставление набора вычислительных ресурсов или их логического объединения, абстрагированное от аппаратной реализации, и обеспечивающее при этом логическую изоляцию друг от друга вычислительных процессов, выполняемых на одном физическом ресурсе.VMware, Citrix (Xen), OpenVZ, KVM, Hyper-V,... Да/Нет"],
        ["VDI", "Роль предоставляющая пользователям возможность работать с программами, установленными на сервере удаленных рабочих столов, или со всем рабочим столом.VMware vSphere, Microsoft Hyper-V, Citrix XenServer,… Да/Нет"],
        ["Терминальный сервер", "Терминальный сервер служит для удалённого обслуживания пользователя с предоставлением рабочего стола. Windows Server, Horizon, KVM,Citrix,… Да/Нет"],
        ["Поддержка опекуна узла для Hyper-V", "Диспетчер Hyper-V позволяет управлять небольшим количеством узлов Hyper-V, как удаленными, так и локальными. Да/Нет"],
        ["Веб-сервер", "Сервер, принимающий HTTP-запросы от клиентов, обычно веб-браузеров, и выдающий им HTTP-ответы, как правило, вместе с HTML-страницей, изображением, файлом, медиа-потоком или другими данными. IIS, Nginx, Apache,… Да/Нет"],
        ["FTP-сервер", "FTP-сервер предназначен для обмена файлами через Интернет или локальную компьютерную сеть. FileZila, Cerberus, Serv-U,… Да/Нет."],
        ["Файловый сервер", "Выделенный сервер, предназначенный для выполнения файловых операций ввода-вывода и хранящий файлы любого типа. Windows Server, Samba,… Да/Нет"],
    ]),
    questions_3: [],
    questions_4: new Map([
        ["Количество получателей", "540"],
        ["Размер почтового ящика", "5 Гб"],
        ["Возможность интеграции с Active Directory", "Да / Нет"],
        ["Панель управления почтой", "Да / Нет"],
        ["Расширенные возможности по управлению пользователями", "Да / Нет"],
        ["Антиспам и антивирусная защита", "Да / Нет"],
        ["Гибкие правила маршрутизации и обработки почтовых сообщений", "Да / Нет"],
        ["Поддержка SMTP, POP и IMAP", "Да / Нет"],
        ["Восстановление удаленных почтовых ящиков и удаленных элементов", "Да / Нет"],
        ["Восстановление отдельных элементов", "Да / Нет"],
        ["Глубина хранения журналов", "Да / Нет"],
        ["Поддержка мобильных устройств", "Да / Нет"],
        ["Списки адресов и глобальный список адресов", "Да / Нет"],
        ["Использование групповых рассылок", "Да / Нет"],
        ["Оповещения о емкости", "Да / Нет"],
        ["Делегированный доступ", "Да / Нет"],
        ["Общий доступ к календарю", "Да / Нет"],
        ["Общие задачи", "Да / Нет"],
        ["Общие папки", "Да / Нет"],
        ["Голосовая почта", "Да / Нет"],
        ["Функции автоответчика и переадресации почты", "Да / Нет"],
    ]),
    questions_5: new Map([
        ["Объем хранимых резервных копий (ТБ)", "23"],
        ["Планируется ли развертывание резервного сервера резервного копирования?", "Да / Нет"],
        ["Поддержка различных каналов и протоколов передачи данных: подключение и передача данных в сетях SAN и NAS, копирование по протоколу NDMP, Off-host backup", "Да / Нет"],
        ["Поддержка технологии Changed Block Tracking (CBT) и Microsoft Volume Shadow Copy Service (VSS)", "Да / Нет"],
        ["Администрирование по ролям для распределения прав доступа к системе", "Да / Нет"],
        ["Безагентное резервное копирование виртуальных машин (без установки отдельного агента на каждую виртуальную машину)", "Да / Нет"],
        ["Создание моментальных снимков (Snapshot)", "Да / Нет"],
        ["Гранулярное/выборочное восстановление приложений и баз данных: MS Exchange, MS SQL, MS Active Directory, Oracle", "Да / Нет"],
        ["Полное, дифференциальное, инкрементное и синтетическое резервное копирование", "Да / Нет"],
        ["Блочное и файловое резервное копирование", "Да / Нет"],
        ["Многопоточное резервное копирование", "Да / Нет"],
        ["Автоматическое отслеживание и распределение нагрузки между несколькими заданиями по резервному копированию", "Да / Нет"],
        ["Настройка приоритетов заданий резервного копирования", "Да / Нет"],
        ["Возобновление выполнения задания резервного копирования данных в случаи сбоя", "Да / Нет"],
        ["Восстановление на «голое» железо или на оборудование, отличное от исходного (Bare metal recovery)", "Да / Нет"],
        ["Централизованное управление резервным копированием в территориально распределенной инфраструктуре", "Да / Нет"],
        ["Функции мониторинга, оповещения и создания отчетов", "Да / Нет"],
        ["Требуется ли агентский бэкап для СУБД?", "Да / Нет"],
        ["Модуль PostgreSQL", "Да / Нет"],
    ]),
    // questions_6: new Map([
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    // ]),
    // questions_7: new Map([
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    // ]),
    // questions_8: new Map([
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    //     ["", ""],
    // ]),
    clickedDetailsAreOpen() {
        const detailsElements = document.querySelectorAll('details');

        function handleClickOnDetails() {
            const detailsOpened = document.querySelectorAll('details[open]');

            for (const item of detailsOpened) {
                if (this !== item) {
                    item.removeAttribute("open");
                }
            }
        }
        detailsElements.forEach(function (item) {
            item.removeEventListener('click', handleClickOnDetails, false);
            item.addEventListener("click", handleClickOnDetails, false);
        });
    },
    firstInit() {
        const getBlockId = (e) => {
            let id = e.target.dataset.id;
            this.init(id);
        };
        document.querySelectorAll('.modal__title').forEach((item) => {
            item.removeEventListener('click', getBlockId);
            item.addEventListener('click', getBlockId);
        });
        this.clickedDetailsAreOpen();
    },
    init(questionsBlockId) {
        let blocksArr = [];
        switch (questionsBlockId) {
            case "block-0":
                blocksArr = this.questions_1;
                break;
            case "block-1":
                blocksArr = this.questions_2;
                break;
            case "block-2":
                blocksArr = []; // this.questions_3;
                break;
            case "block-3":
                blocksArr = this.questions_4;
                break;
            case "block-4":
                blocksArr = this.questions_5;
                break;
                // case "block-5":
                //     blocksArr = this.questions_6;
                //     break;
                // case "block-6":
                //     blocksArr = this.questions_7;
                //     break;
                // case "block-7":
                //     blocksArr = this.questions_8;
                //     break;
            default:
                blocksArr = this.questions_1;
                break;
        }

        this.createQuestions(blocksArr, questionsBlockId);
        this.checkQuestionsHaveAnswered(questionsBlockId);
        this.checkBeforePrint(questionsBlockId);

        this.handleEvent = function (event) {
            if (event.type === 'click') {
                this.action(questionsBlockId, event);
            }
        };
        document.removeEventListener('click', this, false);
        document.addEventListener('click', this, false);
        // document.addEventListener('click', this.action.bind(this, questionsBlockId), false); //невозможно удалить EventListener
    },
    createQuestions(blocksArr, blockId) {
        const questionsFromDom = document.querySelectorAll(`#${blockId}-questions`);
        if (questionsFromDom[0].childElementCount === blocksArr.size + 1) {
            return;
        }

        let index = 0;
        for (let items of blocksArr) {
            document.getElementById(`${blockId}-questions`).innerHTML += `<li>
                    <a href="#" class="add add__new add__new-${blockId} add__new-${blockId}-${index}" data-id="${blockId}-${index}" data-description="${items[1]}">${items[0]}</a>
                </li>`;
            index++;
        }
    },
    checkQuestionsHaveAnswered(blockId) {
        const retrievedObject = localStorage.getItem(blockId);
        const parseItemsObj = JSON.parse(retrievedObject);
        const blockQuestions = document.querySelectorAll(`.add__new-${blockId}`);
        if ((localStorage.length === 0) || (parseItemsObj === null)) {
            return;
        }
        blockQuestions.forEach((element) => {
            const questionDataId = element.getAttribute('data-id');
            if (parseItemsObj.hasOwnProperty(questionDataId) === null) {
                return;
            }
            if (parseItemsObj.hasOwnProperty(questionDataId)) {
                document.querySelector(`.add__new-${questionDataId}`).classList.add('display__none');
            }
        });
    },
    checkBeforePrint(blockId) {
        const dataFromStorage = JSON.parse(localStorage.getItem(`${blockId}`));
        const arrElementsFromDOM = document.querySelectorAll(`.todo__item-${blockId}`);
        const retrievedObject = localStorage.getItem(blockId);
        const parseItemsObj = JSON.parse(retrievedObject);

        if (dataFromStorage) {
            if (arrElementsFromDOM.length === Object.keys(dataFromStorage).length) {
                let size = Object.keys(parseItemsObj).length;

                for (let item in parseItemsObj) {
                    let objItems = [];
                    if (arrElementsFromDOM.length > 0) {
                        let arrElementsDataId = [];
                        arrElementsFromDOM.forEach((element) => {
                            arrElementsDataId.push(element.getAttribute('data-id'));
                        });

                        let mapArrElementsDataId = [...new Set(arrElementsDataId)];
                        mapArrElementsDataId.forEach((element) => {
                            if (parseItemsObj.hasOwnProperty(element)) {
                                objItems.push(parseItemsObj[element]);
                            }
                        });
                    }
                    if (size !== objItems.length) {
                        document.querySelector(`.todo__items-tbody-${blockId}`).insertAdjacentHTML('beforeend', '');
                        this.print(parseItemsObj[item], blockId);
                    }
                }
            } else {
                for (let item in parseItemsObj) {
                    document.querySelector(`.todo__items-tbody-${blockId}`).insertAdjacentHTML('beforeend', '');
                    this.print(parseItemsObj[item], blockId);
                }
            }
        }
    },
    action(blockId, e) {
        const target = e.target;
        const actionBtnBlocks = document.querySelectorAll(`.todo__block_btn-${blockId}`);
        const btnSaveUpdate = document.querySelector(`.todo__save_update-btn-${blockId}`);
        const todoContainer = document.querySelector(`.todo-input-${blockId}`);
        const btn = document.querySelector(`.todo__add-btn-${blockId}`);
        const question = document.querySelector(`#question-${blockId}`);
        const description = document.querySelector(`#answer-${blockId}`);
        const questionsBlock = document.querySelector(`#${blockId}-questions`);

        if (target.classList.contains(`todo__action-${blockId}`)) {
            const action = target.dataset.todoAction;
            const elemItem = target.closest(`.todo__item-${blockId}`);

            if (action === `deleted-${blockId}`) {
                elemItem.dataset.todoState = action;
                let idItem = elemItem.dataset.id;
                this.delete(blockId, idItem);
                elemItem.remove();

                document.querySelector(`.add__new-${idItem}`).classList.remove('display__none');
            }

            if (action === `update-${blockId}`) {
                elemItem.dataset.todoState = action;
                let idItem = elemItem.dataset.id;

                btn.classList.add('display__none');
                btnSaveUpdate.classList.remove('display__none');
                todoContainer.classList.remove('display__none');
                elemItem.classList.add(`todo__item_deleteup-${blockId}`);

                actionBtnBlocks.forEach((e) => {
                    e.classList.add('display__none');
                })

                this.update(idItem, blockId);
            }
        }
        if (target.classList.contains(`todo__save_update-btn-${blockId}`)) {
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
            let descriptionText = target.dataset.description;
            question.value = questionText;
            question.dataset.id = target.dataset.id;
            description.value = descriptionText;

            target.classList.add('display__none');
            todoContainer.classList.remove('display__none');
            btnSaveUpdate.classList.add('display__none');
            questionsBlock.classList.add('display__none');
        }
        if (target.classList.contains(`todo__add-btn-${blockId}`)) {
            this.add(question.dataset.id, blockId);

            todoContainer.classList.add('display__none');
            btnSaveUpdate.classList.remove('display__none');
            questionsBlock.classList.remove('display__none');
        }
        if (target.classList.contains(`todo__cancel-btn-${blockId}`)) {
            todoContainer.classList.add('display__none');
            btnSaveUpdate.classList.remove('display__none');
            questionsBlock.classList.remove('display__none');
            document.querySelector(`.add__new-${question.dataset.id}`).classList.remove('display__none');
        }
        if (target.classList.contains('clear__localStorage')) {
            location.reload();
            localStorage.clear();
            location.reload();
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

        this.save(todoContent, todoContent.id, blockId);
    },

    create(obj, blockId) {
        return `<tr class="todo__item todo__item-${blockId} todo__item-${obj['id']}" data-id="${obj['id']}" data-todo-state="active" key="key-${blockId}">
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
    delete(blockId, idItem) {
        if (!localStorage.getItem(blockId)) {
            return;
        }
        let parseObjItems = JSON.parse(localStorage.getItem(blockId));
        if (parseObjItems.hasOwnProperty(idItem)) {
            delete parseObjItems[idItem];
        }
        localStorage.removeItem(blockId);
        localStorage.setItem(blockId, JSON.stringify(parseObjItems));
    },
    update(id, blockId) {
        let parseObjItems = JSON.parse(localStorage.getItem(blockId));
        let items = {};
        for (let item in parseObjItems) {
            if (item === id) {
                items = parseObjItems[item];
            }
        }

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

        this.save(todoContent, todoContent.id, blockId);
    },
    save(obj, id, blockId) {
        let objItems = {};
        if (localStorage.getItem(blockId)) {
            let parseObjItems = JSON.parse(localStorage.getItem(blockId));
            for (let item in parseObjItems) {
                if (parseObjItems.hasOwnProperty(item)) {
                    objItems[item] = parseObjItems[item];
                }
            }
            objItems[id] = obj;
        } else {
            objItems[id] = obj;
        }
        localStorage.setItem(blockId, JSON.stringify(objItems));
        document.querySelector(`.todo__items-tbody-${blockId}`).innerHTML = '';
        this.getItem(blockId);
    },
    getItem(blockId) {
        let retrievedObject = localStorage.getItem(blockId);
        let parseItemsObj = JSON.parse(retrievedObject);

        document.querySelector(`.todo__items-tbody-${blockId}`).innerHTML = '';

        for (let item in parseItemsObj) {
            this.print(parseItemsObj[item], blockId);
        }
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
todo.firstInit();



document.querySelector('.clear__localStorage').removeEventListener("click", () => {
    console.log("removeEventListener");
    localStorage.clear();
    location.reload();
});
document.querySelector('.clear__localStorage').addEventListener("click", () => {
    console.log("addEventListener");
    localStorage.clear();
    location.reload();
});