using ControleFinanceiro.BLL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ControleFinanceiro.DAL.Mapeamentos
{
    public class UsuarioMap : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.Property(u => u.Id).ValueGeneratedOnAdd();

            builder.Property(u => u.Cpf).HasMaxLength(20).IsRequired();
            builder.HasIndex(u => u.Cpf).IsUnique();

            builder.Property(u => u.Profissao).HasMaxLength(50).IsRequired();

            builder.HasMany(u => u.Despesas).WithOne(u => u.Usuario).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(u => u.Ganhos).WithOne(u => u.Usuario).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(u => u.Cartoes).WithOne(u => u.Usuario).OnDelete(DeleteBehavior.NoAction);

            builder.ToTable("Usuarios");
        }
    }
}
