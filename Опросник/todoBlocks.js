const todoBlocks = {
    questionsBlocks: [
        "Общие вопросы",
        "Роли и компоненты",
        "Групповые политики",
        "Корпоративный почтовый сервер",
        "Резервное копирование",
        // "Конфигурация сервера",
        // "АРМ",
        // "Принтеры и МФУ",
    ],

    initDocument() {
        document.getElementById('modal__contents').innerHTML = this.questionsBlocks.map((title, index) =>
            `<details class="modal__content_header">
                <summary class="modal__title modal__title-block-${index}" data-id="block-${index}" id="block-${index}">${title}</summary>
                <div class="ul__div">
                    <ul class="questions" id="block-${index}-questions">
                        <h4>Список вопросов:</h4>
                    </ul>
                </div>
                <div class="modal__content_body modal__content_body-block-${index}">
                    <form action="#">
                        <div class="form__row">
                            <div id="add_table_inputs" class="form__row todo todo-input-block-${index} display__none">
                                <div class="row">
                                    <div class="form__group">
                                        <label>Вопрос:</label>
                                        <input type="text" id="question-block-${index}" autocomplete="off"
                                            class="form__control todo__input_text todo__input_text-block-${index}" name="number" disabled
                                            value="Вопрос"
                                            data-id=""
                                        >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form__group">
                                        <label>Пример ответа/ Описание:</label>
                                        <textarea id="answer-block-${index}" rows="3" wrap="soft" autocomplete="off" disabled
                                            class="form__control form__control_textarea todo__input_text todo__input_text-block-${index}"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form__group">
                                        <label>Ответ:</label>
                                        <textarea rows="2" wrap="soft" autocomplete="on" id="comment-block-${index}"
                                            class="form__control form__control_textarea todo__input_text todo__input_text-block-${index}"></textarea>
                                    </div>
                                </div>
                                <button class="save todo__add todo__add-btn-block-${index}">Добавить</button>
                                <button class="save todo__cancel todo__cancel-btn-block-${index}">Отмена</button>
                                <button class="save todo__save_update todo__save_update-btn-block-${index}"" >Сохранить</button>
                            </div>
                            <div class="row">
                                <h4>Таблица аудита</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 200px;">Вопрос</th>
                                            <th style="width: 380px;">Пример ответа/ Описание:</th>
                                            <th style="width: 300px;">Ответ</th>
                                        </tr>
                                    </thead>
                                    <tbody class="todo__items todo__items-tbody-block-${index}" data-id="tbody-block-${index}" id="tbody-block-${index}">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </details>`
        ).join('');
    },
}
todoBlocks.initDocument();