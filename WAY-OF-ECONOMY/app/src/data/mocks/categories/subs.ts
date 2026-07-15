interface Sub {
    id: string,
    referenceId: string,
    title: string
}

export const subCategories: Array<Sub> = [
  // Alimentos
  { id: "sub01", referenceId: "mc01", title: "Mercearia" },
  { id: "sub02", referenceId: "mc01", title: "Bebidas" },
  { id: "sub03", referenceId: "mc01", title: "Frios e Laticínios" },
  { id: "sub04", referenceId: "mc01", title: "Carnes e Aves" },
  { id: "sub05", referenceId: "mc01", title: "Hortifruti" },
  { id: "sub06", referenceId: "mc01", title: "Padaria" },
  { id: "sub07", referenceId: "mc01", title: "Congelados" },
  { id: "sub08", referenceId: "mc01", title: "Doces e Chocolates" },

  // Limpeza
  { id: "sub09", referenceId: "mc02", title: "Detergentes" },
  { id: "sub10", referenceId: "mc02", title: "Desinfetantes" },
  { id: "sub11", referenceId: "mc02", title: "Sabão em Pó" },
  { id: "sub12", referenceId: "mc02", title: "Amaciantes" },
  { id: "sub13", referenceId: "mc02", title: "Limpeza de Cozinha" },
  { id: "sub14", referenceId: "mc02", title: "Limpeza de Banheiro" },
  { id: "sub15", referenceId: "mc02", title: "Utensílios de Limpeza" },

  // Higiene Pessoal
  { id: "sub16", referenceId: "mc03", title: "Shampoo" },
  { id: "sub17", referenceId: "mc03", title: "Condicionador" },
  { id: "sub18", referenceId: "mc03", title: "Sabonetes" },
  { id: "sub19", referenceId: "mc03", title: "Creme Dental" },
  { id: "sub20", referenceId: "mc03", title: "Escovas de Dente" },
  { id: "sub21", referenceId: "mc03", title: "Desodorantes" },
  { id: "sub22", referenceId: "mc03", title: "Perfumaria" },

  // Brinquedos
  { id: "sub23", referenceId: "mc04", title: "Bonecas" },
  { id: "sub24", referenceId: "mc04", title: "Carrinhos" },
  { id: "sub25", referenceId: "mc04", title: "Jogos de Tabuleiro" },
  { id: "sub26", referenceId: "mc04", title: "Pelúcias" },
  { id: "sub27", referenceId: "mc04", title: "Brinquedos Educativos" },
  { id: "sub28", referenceId: "mc04", title: "Quebra-Cabeças" },

  // Roupas
  { id: "sub29", referenceId: "mc05", title: "Masculino" },
  { id: "sub30", referenceId: "mc05", title: "Feminino" },
  { id: "sub31", referenceId: "mc05", title: "Infantil" },
  { id: "sub32", referenceId: "mc05", title: "Calçados" },
  { id: "sub33", referenceId: "mc05", title: "Acessórios" },

  // Eletrônicos
  { id: "sub34", referenceId: "mc06", title: "Celulares" },
  { id: "sub35", referenceId: "mc06", title: "Notebooks" },
  { id: "sub36", referenceId: "mc06", title: "Computadores" },
  { id: "sub37", referenceId: "mc06", title: "Periféricos" },
  { id: "sub38", referenceId: "mc06", title: "Áudio" },
  { id: "sub39", referenceId: "mc06", title: "TV e Vídeo" },
  { id: "sub40", referenceId: "mc06", title: "Acessórios" },

  // Decorações
  { id: "sub41", referenceId: "mc07", title: "Quadros" },
  { id: "sub42", referenceId: "mc07", title: "Vasos" },
  { id: "sub43", referenceId: "mc07", title: "Velas" },
  { id: "sub44", referenceId: "mc07", title: "Flores Artificiais" },
  { id: "sub45", referenceId: "mc07", title: "Espelhos" },
  { id: "sub46", referenceId: "mc07", title: "Objetos Decorativos" },

  // Bazar e Papelaria
  { id: "sub47", referenceId: "mc08", title: "Cadernos" },
  { id: "sub48", referenceId: "mc08", title: "Canetas" },
  { id: "sub49", referenceId: "mc08", title: "Lápis" },
  { id: "sub50", referenceId: "mc08", title: "Pastas" },
  { id: "sub51", referenceId: "mc08", title: "Material Escolar" },
  { id: "sub52", referenceId: "mc08", title: "Utilidades Domésticas" },

  // Automotivos
  { id: "sub53", referenceId: "mc09", title: "Óleos Lubrificantes" },
  { id: "sub54", referenceId: "mc09", title: "Acessórios Automotivos" },
  { id: "sub55", referenceId: "mc09", title: "Limpeza Automotiva" },
  { id: "sub56", referenceId: "mc09", title: "Pneus" },
  { id: "sub57", referenceId: "mc09", title: "Baterias" },

  // Portátil
  { id: "sub58", referenceId: "mc10", title: "Power Banks" },
  { id: "sub59", referenceId: "mc10", title: "Caixas de Som Portáteis" },
  { id: "sub60", referenceId: "mc10", title: "Ventiladores Portáteis" },
  { id: "sub61", referenceId: "mc10", title: "Lanternas" },
  { id: "sub62", referenceId: "mc10", title: "Carregadores Portáteis" },

  // Ferramentas
  { id: "sub63", referenceId: "mc11", title: "Ferramentas Manuais" },
  { id: "sub64", referenceId: "mc11", title: "Ferramentas Elétricas" },
  { id: "sub65", referenceId: "mc11", title: "Parafusos e Fixadores" },
  { id: "sub66", referenceId: "mc11", title: "Caixas de Ferramentas" },
  { id: "sub67", referenceId: "mc11", title: "Equipamentos de Medição" },

  // Para Casa
  { id: "sub68", referenceId: "mc12", title: "Cozinha" },
  { id: "sub69", referenceId: "mc12", title: "Banheiro" },
  { id: "sub70", referenceId: "mc12", title: "Quarto" },
  { id: "sub71", referenceId: "mc12", title: "Sala" },
  { id: "sub72", referenceId: "mc12", title: "Lavanderia" },
  { id: "sub73", referenceId: "mc12", title: "Organização" },
];