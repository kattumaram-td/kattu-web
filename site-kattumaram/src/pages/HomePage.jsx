import React, { useState } from "react";
import logo from "../assets/logo-kattumaram.png";

function HomePage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    duvida: "",
  });

  const [status, setStatus] = useState(null); // sucesso ou erro

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nome || !formData.email || !formData.duvida) {
      setStatus({ success: false, message: "Preencha todos os campos." });
      return;
    }

    try {
      const response = await fetch("https://api-fale-conosco.onrender.com/falaconosco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: result.message });
        setFormData({ nome: "", email: "", duvida: "" });
      } else {
        setStatus({ success: false, message: result.message });
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus({
        success: false,
        message: "Erro ao enviar. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf3e8] flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-[#00695c] py-4 px-8 shadow-md">
        <ul className="flex justify-around text-white font-semibold text-lg">
          <li className="hover:text-[#80cbc4] cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#80cbc4] cursor-pointer">
            <a href="#contato">Contato</a>
          </li>
          <li className="hover:text-[#80cbc4] cursor-pointer">
            <a href="#quem-somos">Quem somos</a>
          </li>
          <li className="hover:text-[#80cbc4] cursor-pointer">
            <a href="#o-que-fazemos">O que fazemos</a>
          </li>
          <li className="hover:text-[#80cbc4] cursor-pointer">
            <a href="#servicos">Serviços</a>
          </li>
          <li className="hover:text-[#80cbc4] cursor-pointer">
            <a href="#etc">Etc</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div
        id="home"
        className="flex flex-col items-center justify-center flex-grow"
      >
        <img
          src={logo}
          alt="Logo Kattumaram"
          className="w-40 h-40 mb-6 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-[#004d40] mb-4">
          BEM-VINDO À KATTUMARAM
        </h1>
        <p className="text-center text-[#5d4037] max-w-md mb-8">
          Construindo soluções data-driven para governos, ações sociais e
          pequenos negócios.
        </p>
        <button className="bg-[#004d40] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#00796b] transition">
          Saiba mais
        </button>
      </div>

      {/* Contato */}
      <section id="contato" className="py-16 text-center w-full px-4 md:px-0 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-[#004d40]">Contato</h2>
        <p className="text-[#5d4037] mb-6">
          Entre em contato conosco pelo formulário abaixo:
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            className="p-3 border border-gray-300 rounded"
            required
          />
          <textarea
            name="duvida"
            value={formData.duvida}
            onChange={handleChange}
            placeholder="Digite sua mensagem ou dúvida"
            rows="5"
            className="p-3 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#004d40] text-white py-3 px-6 rounded hover:bg-[#00796b] transition"
          >
            Enviar
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 font-semibold ${
              status.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </section>

      {/* Quem somos */}
      <section id="quem-somos" className="py-16 text-center px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-4 text-[#004d40]">Quem somos</h2>
        <p className="text-[#5d4037]">
          Na Kattumaram, usamos tecnologia de dados para transformar realidades.
          Somos uma startup com foco em soluções de Engenharia e Análise de Dados
          voltadas para o setor público, ações sociais e micro e pequenas
          empresas. Atuamos na construção de processos data-driven — da coleta ao
          insight — ajudando organizações a tomar decisões mais inteligentes,
          eficientes e com impacto real.
          <br />
          <br />
          Nosso propósito é democratizar o acesso à inteligência analítica,
          automatizando processos, otimizando projetos, serviços e políticas
          públicas por meio de dados confiáveis, pipelines escaláveis e arquitetura
          segura. Valorizamos a segurança dos dados em cada etapa, garantindo
          integridade, privacidade e conformidade com as melhores práticas do
          mercado.
          <br />
          <br />
          Acreditamos que dados bem trabalhados podem mudar cidades, melhorar
          negócios e transformar vidas.
          <br />
          <br />
          🚀 O futuro é orientado por dados. A Kattumaram constrói esse caminho.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
