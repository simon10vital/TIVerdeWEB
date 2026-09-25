export function templateInicio() {

    return `
        <section class="pagina">

            <img
                class="imagem principal"
                src="imagens/ti verde 1.jfif"
                alt="TECLA VERDE COM IMAGEM DE FOLHA DE ÁRVORE"
            >

            <section class="sobre">

                <div>

                    <h2>
                        Uma ONG que busca a preservação do meio ambiente
                    </h2>

                    <p>
                        A TI VERDE é uma organização que atua na proteção
                        do meio ambiente, promovendo a conscientização e
                        a sustentabilidade, aplicando práticas ecológicas
                        na tecnologia atual, como: a utilização de energia
                        renovável e a implementação de soluções tecnológicas
                        sustentáveis. Estamos atualmente trabalhando em
                        projetos que visam criar um impacto positivo no
                        meio ambiente, e ajudar na qualidade de vida, tanto
                        para comunidades locais quanto para o planeta como
                        um todo.
                    </p>

                    <p>
                        O nosso planeta precisa de nós para preservá-lo.
                        Por isso, trabalhamos para criar soluções
                        tecnológicas que respeitem o meio ambiente e
                        promovam a sustentabilidade. Com isso, desejamos
                        conscientizar a população sobre a importância da
                        preservação do meio ambiente. As demais informações
                        estão a seguir.
                    </p>

                </div>

            </section>

            <h2>Mais informações</h2>

            <ul>

                <li>
                    <a href="#" data-page="projetos">
                        Projetos
                    </a>
                </li>

            </ul>

        </section>

    `;
}


export function templateProjetos() {

    return `
        <section class="pagina">

            <img
                class="imagem principal"
                src="imagens/ti verde 2.jpg"
                alt="GRÁFICO DE CRESCIMENTO DE PLANTAS, COM UMA LÂMPADA NO FINAL"
            >

            <section class="projetos">

                <div>

                    <h2>Nossos Projetos</h2>

                    <span class="badge">Ativo</span>

                    <p>
                        A TI VERDE atua na preservação do meio ambiente por meio da
                        conscientização, da sustentabilidade e do uso responsável da
                        tecnologia. Nossos projetos buscam aproximar a sociedade das
                        questões ambientais e incentivar práticas que contribuam para
                        um futuro mais sustentável.
                    </p>

                    <h3>Voluntariado</h3>

                    <p>
                        O voluntariado é uma das principais formas de participar das
                        ações da TI VERDE. Pessoas interessadas podem contribuir com seu
                        tempo, conhecimento e habilidades em diferentes atividades
                        desenvolvidas pela organização.
                    </p>

                    <p>
                        Os voluntários podem participar de campanhas de conscientização
                        ambiental, ações de preservação, eventos educativos e projetos
                        relacionados ao uso sustentável da tecnologia. Não é necessário
                        possuir experiência específica: cada atividade possui necessidades
                        diferentes e todos podem contribuir de alguma forma.
                    </p>

                    <h3>Como participar?</h3>

                    <p>
                        Para fazer parte dos nossos projetos, o interessado pode entrar
                        em contato com a TI VERDE e informar suas áreas de interesse e
                        disponibilidade. Após o cadastro, serão apresentadas as oportunidades
                        de voluntariado disponíveis e as orientações necessárias para participar
                        das atividades.
                    </p>

                </div>


                <div>

                    <h2>Doações</h2>

                    <p>
                        As doações ajudam a TI VERDE a manter e ampliar seus projetos
                        ambientais. Os recursos recebidos são utilizados para apoiar
                        campanhas de conscientização, ações de preservação, materiais
                        educativos e iniciativas que incentivem o uso de tecnologias
                        mais sustentáveis.
                    </p>

                    <p>
                        Toda contribuição, independentemente do valor, pode ajudar na
                        realização de novas ações e na ampliação do impacto positivo
                        da organização.
                    </p>

                    <h3>Como contribuir?</h3>

                    <p>
                        Para realizar uma doação, entre em contato com a TI VERDE pelos
                        nossos canais de comunicação. Nossa equipe fornecerá as
                        informações necessárias para que a contribuição seja realizada
                        de forma segura e transparente.
                    </p>

                </div>


                <div>

                    <h2>Faça Parte Dessa Iniciativa</h2>

                    <p>
                        A preservação do meio ambiente depende da participação de todos.
                        Seja como voluntário ou contribuindo por meio de uma doação,
                        você pode fazer parte da construção de um futuro mais sustentável.
                    </p>

                    <p>
                        Junte-se à TI VERDE e contribua para transformar boas ideias em
                        ações que beneficiem o meio ambiente e a sociedade.
                    </p>

                </div>

            </section>

        </section>

    `;
}


export function templateCadastro() {

    return `

        <section class="pagina">

            <h2>Cadastro - TI VERDE</h2>

            <p>
                Faça seu cadastro para participar de nossas iniciativas.
            </p>


            <div class="alerta">

                <strong>Atenção:</strong>
                confira os dados antes de enviar.

            </div>


            <form id="form-cadastro">


                <fieldset>

                    <legend>Dados pessoais</legend>

                    <div class="dados">


                        <div class="campo">

                            <label for="nome">
                                Nome:
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label for="email">
                                Email:
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label for="telefone">
                                Telefone:
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                pattern="(?:\\(?([1-9]{2})\\)?)?(?:[2-8]|9[0-9])[0-9]{3}\\-?[0-9]{4}"
                                placeholder="(11) 91234-5678"
                                title="Digite um telefone válido com DDD."
                                required
                            >

                        </div>


                        <div class="campo">

                            <label for="cpf">
                                CPF:
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                                placeholder="000.000.000-00"
                                title="Digite um CPF válido. Exemplo: 123.456.789-00"
                                required
                            >

                        </div>


                    </div>

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>

                    <div class="dados">


                        <div class="campo">

                            <label for="endereco">
                                Endereço:
                            </label>

                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label for="estado">
                                Estado:
                            </label>

                            <select
                                id="estado"
                                name="estado"
                                required
                            >

                                <option value="">
                                    Selecione
                                </option>

                                <option value="go">
                                    Goiás
                                </option>

                                <option value="df">
                                    Distrito Federal
                                </option>

                                <option value="sp">
                                    São Paulo
                                </option>

                                <option value="mg">
                                    Minas Gerais
                                </option>

                            </select>

                        </div>


                        <div class="campo">

                            <label for="cidade">
                                Cidade:
                            </label>

                            <select
                                id="cidade"
                                name="cidade"
                                required
                            >

                                <option value="">
                                    Selecione
                                </option>

                                <option value="goiania">
                                    Goiânia
                                </option>

                                <option value="brasilia">
                                    Brasília
                                </option>

                                <option value="sao_paulo">
                                    São Paulo
                                </option>

                                <option value="belo_horizonte">
                                    Belo Horizonte
                                </option>

                            </select>

                        </div>


                        <div class="campo">

                            <label for="CEP">
                                CEP:
                            </label>

                            <input
                                type="text"
                                id="CEP"
                                name="CEP"
                                pattern="[0-9]{5}-[0-9]{3}"
                                placeholder="00000-000"
                                title="Digite um CEP válido. Exemplo: 12345-678"
                                required
                            >

                        </div>


                    </div>

                </fieldset>


                <fieldset>

                    <legend>Mensagem</legend>

                    <div class="dados">

                        <div class="campo">

                            <label for="mensagem">
                                Por que você quer participar?
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows="4"
                                cols="50"
                                required
                            ></textarea>

                        </div>

                    </div>

                </fieldset>


                <fieldset>

                    <legend>
                        Interesse em nossos projetos
                    </legend>

                    <div class="dados">


                        <div class="campo">

                            <label for="voluntario">
                                Quero ser voluntário
                            </label>

                            <input
                                type="checkbox"
                                id="voluntario"
                                name="voluntario"
                            >

                        </div>


                        <div class="campo">

                            <label for="doacao">
                                Quero realizar uma doação
                            </label>

                            <input
                                type="checkbox"
                                id="doacao"
                                name="doacao"
                            >

                        </div>


                    </div>

                </fieldset>


                <button type="submit">
                    Enviar
                </button>


            </form>


            <div id="toast" class="toast">

                Cadastro realizado com sucesso!

            </div>


        </section>

    `;
}