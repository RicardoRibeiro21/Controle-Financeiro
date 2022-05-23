using ControleFinanceiro.BLL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ControleFinanceiro.DAL.Mapeamentos
{
    public class CategoriaMap : IEntityTypeConfiguration<Categoria>
    {
        public void Configure(EntityTypeBuilder<Categoria> builder)
        {
            // Chave primária
            builder.HasKey(c => c.CategoriaId);

            // Campos
            builder.Property(c => c.Nome).HasMaxLength(50).IsRequired();
            builder.Property(c => c.Icone).HasMaxLength(15).IsRequired();

            // Relacionamentos
            builder.HasOne(c => c.Tipo).WithMany(c => c.Categorias).HasForeignKey(c => c.TipoId).IsRequired();
            builder.HasMany(c => c.Ganhos).WithOne(c => c.Categoria);
            builder.HasMany(c => c.Despesas).WithOne(c => c.Categoria);

            // Alterando o nome da tabela na hora da criação
            builder.ToTable("Categorias");
        }
    }
}
