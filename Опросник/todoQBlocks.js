const todoQBlocks = {
    questionsBlock: new Map([
        ["Конфигурация программ", ""],
        ["Конфигурация Windows", ""],
        ["Административные шаблоны", "Узел «Административные шаблоны» является крупнейшим из всех возможных расширений групповой политики и включает тысячи параметров для приложений и компонентов операционной системы Windows. Каждому параметру политики административных шаблонов соответствует определенный параметр системного реестра. Политики в узле «Административные шаблоны» конфигурации компьютера изменяют значения реестра в ключе HKEY_LOCAL_MACHINE (или просто HKLM), а политики в узле «Административные шаблоны» конфигурации пользователя – HKEY_CURRENT_USER (HKCU). В некоторых источниках административные шаблоны могут называться политиками на основе реестра."],
    ]),
    questionsBlock_1: new Map([ //Конфигурация программ
        ["Установка программ", "Установка программ средствами групповой политики"],
    ]),
    questionsBlock_2: new Map([ //Конфигурация Windows
        ["Политика разрешения имен", "Этот узел предоставляет возможность управлением расширением таблицы политик разрешения имен (NRTP), которая хранит параметры конфигурации для безопасности DNS (DNSSEC). Политика разрешения имен – это объект групповой политики, в котором указаны сведения о политике, которые отображаются в NRTP. Это расширение стоит настраивать только в том случае, если ваш компьютер входит в состав домена Active Directory. Эта политика расположена только в узле «Конфигурация компьютера»."],
        ["Сценарии (Запуск/Завершение)", "При помощи этого расширения вы можете указывать по два типа сценариев автозапуска или завершения работы для узлов конфигурации компьютера и пользователя соответственно. В том случае, если вы укажете более одного сценария, то они будут выполняться согласно перечню в списке. Время ожидания обработки сценариев – 10 минут. В операционных системах, предшествующих Windows Server 2008 R2 и Windows 7, можно было использовать только языки сценариев ActiveX (Microsoft Visual Basic, Jscript, VBScript, Perl) и пакетные файлы (*.bat, *.cmd). Теперь появилась возможность использовать сценарии PowerShell"],
        ["Развернутые принтеры", "Разворачивание принтеров с помощью групповой политики."],
        ["Параметры безопасности", "Параметры политики безопасности должны использоваться в рамках общей реализации системы безопасности, чтобы обеспечить безопасность контроллеров доменов, серверов, клиентских устройств и других ресурсов в организации."],
        ["QoS на основе политик", "Позволяет управлять приоритетом трафика в Windows с помощью настроек QoS."],
    ]),
    questionsBlock_2_1: new Map([ //Параметры безопасности
        ["Политики учетных записей", "Политики учетных записей, которые позволяют устанавливать политику паролей и блокировки учетных записей."],
        ["Локальные политики", "Локальные политики, отвечающие за политику аудита, параметры безопасности и назначения прав пользователя."],
        ["Журналы событий", "Журнал событий, который позволяет настраивать параметры журналов событий приложений, системных событий и событий безопасности."],
        ["Группы с ограниченным доступом", "Группы с ограниченным доступом, которые позволяют включать пользователей в отдельные группы."],
        ["Системные службы", "Системные службы, определяющие типы запуска и разрешения доступа для системных служб."],
        ["Реестр", "Реестр, который задает разрешения контроля доступа к отдельным разделам системного реестра."],
        ["Файловая система", "Файловая система, определяющие разрешения контроля доступа для файлов и папок NTFS."],
        ["Политики проводной сети", "Политики проводной сети (IEEE 802.3), которые управляют настройками проводных сетей."],
        ["Монитор брандмауера", "Брандмауэр Windows в режиме повышенной безопасности, при помощи которых вы можете создавать правила входящих и исходящих подключений, а также правила безопасности подключений так же, как и в одноименной оснастке. Разница лишь в том, что после создания правила, его настройки нельзя будет изменить, а также в оснастке «Брандмауэр Windows в режиме повышенной безопасности» у вас не будет прав для удаления текущего правила."],
        ["Диспетчер списка сетей", "Политики диспетчера списка сетей, позволяющие управлять всеми вашими сетевыми профилями."],
        ["Политики беспроводной сети", "Политики беспроводной сети (IEEE 802.11), которые управляют настройками беспроводных сетей."],
        ["Политики открытого ключа", "Политики открытого ключа, которые позволяют: - настраивать компьютеры на автоматическую отправку запросов в центр сертификации предприятия и установку выдаваемых сертификатов.- создавать и распространять список доверия сертификатов(CTL). - добавлять агенты восстановления шифрованных данных и изменение параметров политики восстановления шифрованных данных. - добавлять агенты восстановления данных шифрования диска BitLocker."],
        ["Политики ограниченного использования программ", "Network Access Protection, которые позволяют создавать политики защиты сетевого доступа."],
        ["Управление приложениями", ""],
        ["IP безопасность 'службы каталогов'", "Политики IP-безопасности на «Локальный компьютер», которые позволяют создавать политику IP-безопасности локального компьютера и управлять списками IP-фильтров."],
        ["Расширенная политика аудита", "Конфигурация расширенного аудита, который предоставляет дополняющие локальные политики, отвечающие за аудит."],
    ]),
    questionsBlock_3: new Map([ //Административные шаблоны
        ["Компоненты Windows", "Узел «Административные шаблоны» является крупнейшим из всех возможных расширений групповой политики и включает тысячи параметров для приложений и компонентов операционной системы Windows. Каждому параметру политики административных шаблонов соответствует определенный параметр системного реестра. Политики в узле «Административные шаблоны» конфигурации компьютера изменяют значения реестра в ключе HKEY_LOCAL_MACHINE (или просто HKLM), а политики в узле «Административные шаблоны» конфигурации пользователя – HKEY_CURRENT_USER (HKCU). В некоторых источниках административные шаблоны могут называться политиками на основе реестра."],
    ]),
    initParentCreate() {
        let index = 0;
        document.querySelector('.modal__content_body-block-2').innerHTML = `<a href='#' class="save save__all_checkbox"">Сохранить Групповые политики</a>`;
        for (let items of this.questionsBlock) {
            document.getElementById(`block-2-questions`).innerHTML += `
                <li id="block-2-checkbox-questions-${index}" class="block__checkbox_questions-per">
                    <div class="row">
                        <div class="form__group form__group_checkbox panel__link" data-text="${items[1]}">
                            <input type="checkbox" id="name-${index}" class="form__control form__control_checkbox" name="${items[0]}" data-id="checkbox-questions-${index}" data-text="${items[1]}">
                            <label for="name-${index}" class="label__checkbox add__new-block-2-${index}" data-id="checkbox-questions-${index}">${items[0]}</label>
                        </div>
                    </div>
                </li>
            `
            index++;
        }

    },
    initGetQuestionsParentBlockId() {
        const getBlockId = (e) => {
            let id = e.target.dataset.id;
            let blocksArr = [];
            let labelForId = 12;
            switch (id) {
                case "checkbox-questions-0":
                    blocksArr = this.questionsBlock_1;
                    labelForId = 3;
                    break;
                case "checkbox-questions-1":
                    blocksArr = this.questionsBlock_2;
                    labelForId = 18;
                    break;
                case "checkbox-questions-2":
                    blocksArr = this.questionsBlock_3;
                    labelForId = 16;
                    break;
                case "checkbox-questions-21":
                    blocksArr = this.questionsBlock_2_1;
                    labelForId = 25;
                    break;
                default:
                    blocksArr = [];
                    labelForId = 22;
                    break;
            }
            this.childCreate(blocksArr, id, labelForId);
        };
        document.querySelectorAll('.label__checkbox').forEach((item) => {
            item.removeEventListener('click', getBlockId);
            item.addEventListener('click', getBlockId);
        });

        this.handleEvent = function (event) {
            if (event.type === 'click') {
                this.action(event);
            }
        };
        document.removeEventListener('click', this, false);
        document.addEventListener('click', this, false);
    },
    action(e) {
        const target = e.target;

        if (target.classList.contains(`add__new-block-2-21`)) {
            const id = target.dataset.id;
            this.childCreate(this.questionsBlock_2_1, id, 25);
        }

        if (target.classList.contains(`save__all_checkbox`)) {
            this.getCheckedCheckBoxes();
        }
    },
    childCreate(blocksArr, id, labelForId) {
        const itemsInDOM = document.querySelectorAll(`#block-2-${id}`);
        if (blocksArr.size === undefined) {
            return;
        }
        if (blocksArr.size === itemsInDOM[0].childElementCount - 1) {
            return;
        }
        let index = 0;
        for (let items of blocksArr) {
            document.getElementById(`block-2-${id}`).innerHTML += `
                <ul>
                    <li id="block-2-checkbox-questions-${index+labelForId}" class="block__checkbox_questions-per">
                        <div class="row">
                            <div class="form__group form__group_checkbox panel__link" data-text="${items[1]}">
                                <input type="checkbox" id="name-${index+labelForId}" class="form__control form__control_checkbox" name="${items[0]}" data-id="checkbox-questions-${index+labelForId}" data-text="${items[1]}">
                                <label for="name-${index+labelForId}" class="label__checkbox add__new-block-2-${index+labelForId}" data-id="checkbox-questions-${index+labelForId}">${items[0]}</label>
                            </div>
                        </div>
                    </li>
                </ul>
            `
            index++;
        }
    },
    getCheckedCheckBoxes() {
        var checkboxes = document.querySelectorAll('.form__control_checkbox');
        var checkboxesQuestionsAnswers = {};
        for (var index = 0; index < checkboxes.length; index++) {
            ;
            if (checkboxes[index].checked) {
                checkboxesQuestionsAnswers[checkboxes[index].getAttribute('data-id')] = {
                    0: checkboxes[index].name,
                    1: checkboxes[index].getAttribute('data-text'),
                    2: 'Да'
                };
            } else {
                checkboxesQuestionsAnswers[checkboxes[index].getAttribute('data-id')] = {
                    0: checkboxes[index].name,
                    1: checkboxes[index].getAttribute('data-text'),
                    2: ''
                };
            }
        }
        localStorage.setItem('block-2', JSON.stringify(checkboxesQuestionsAnswers));
        return checkboxesQuestionsAnswers;
    },

}
todoQBlocks.initParentCreate();
todoQBlocks.initGetQuestionsParentBlockId();