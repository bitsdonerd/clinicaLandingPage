import React from "react";

const Index = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Clínica Bem Estar
          </h1>
          <h2 className="text-xl text-gray-600 mb-6 text-center">
            Cuidando da sua saúde com excelência
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto text-center">
            Oferecemos atendimento humanizado e profissionais altamente
            qualificados para cuidar da sua saúde e bem-estar.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white" id="servicos">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634"
                alt="Consultas Médicas"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Consultas Médicas
                </h3>
                <p className="text-gray-600">
                  Atendimento personalizado com os melhores especialistas em
                  diversas áreas da medicina.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842"
                alt="Exames Especializados"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Exames Especializados
                </h3>
                <p className="text-gray-600">
                  Equipamentos de última geração e resultados precisos para seu
                  diagnóstico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-gray-50" id="equipe">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossa Equipe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                alt="Dra. Sofia Santos"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dra. Gabriela</h3>
              <p className="text-gray-600">Diretora Clínica</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
                alt="Dr. Lucas Oliveira"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dr. Lucas Martins</h3>
              <p className="text-gray-600">Clínico Geral</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"
                alt="Dra. Marina Costa"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dra. Marina Costa</h3>
              <p className="text-gray-600">Especialista em Pediatria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-white" id="contato">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Quero Saber Mais
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cidade" className="block text-gray-700 mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidade"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="estado" className="block text-gray-700 mb-2">
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Clínica Bem Estar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
