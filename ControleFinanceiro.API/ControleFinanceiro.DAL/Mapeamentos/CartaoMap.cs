using ControleFinanceiro.BLL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ControleFinanceiro.DAL.Mapeamentos
{
    public class CartaoMap : IEntityTypeConfiguration<Cartao>
    {
        public void Configure(EntityTypeBuilder<Cartao> builder)
        {
            // Chave primária
            builder.HasKey(c => c.CartaoId);

            // Campos
            builder.Property(c => c.Nome).HasMaxLength(50).IsRequired();
            builder.Property(c => c.Bandeira).HasMaxLength(15).IsRequired();

            builder.Property(c => c.Numero).HasMaxLength(20).IsRequired();
            builder.HasIndex(c => c.Numero).IsUnique();
            builder.Property(c => c.Limite).IsRequired();

            // Relacionamentos
            builder.HasOne(c => c.Usuario).WithMany(c => c.Cartoes).HasForeignKey(c => c.UsuarioId).IsRequired().OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(c => c.Despesas).WithOne(c => c.Cartao);
             
            // Alterando o nome da tabela na hora da criação
            builder.ToTable("Categorias");
        }
    }
}
