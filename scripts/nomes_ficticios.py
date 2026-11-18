"""
Troca os nomes reais da tabela de leads do CRM (crm3.jpg) por nomes ficticios,
escritos por cima com a mesma fonte do sistema (Inter). Os numeros do topo ficam.

Uso:
    python scripts/nomes_ficticios.py --origem PASTA_COM_OS_ORIGINAIS --fonte PASTA_COM_INTER

--origem: pasta com o crm3.jpg original (fora do repositorio).
--fonte: pasta com Inter-Regular.ttf e Inter-Medium.ttf (Google Fonts, licenca OFL).
Le sempre o original, entao rodar de novo nao acumula edicoes.
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
DESTINO = RAIZ / "public/projects/crmontesite/crm3.jpg"

# Linha da tabela: topo das letras (px) e o texto ficticio de cada coluna.
# Coluna: (x inicial, x final da area apagada, peso, cor)
COLUNAS = {
    "empresa": (34, 190, "medium", (17, 24, 39)),
    "cliente": (202, 280, "regular", (31, 41, 55)),
    "vendedor": (430, 505, "regular", (31, 41, 55)),
    "obs": (899, 1010, "regular", (156, 163, 175)),
}
LINHAS = [
    (470, {"empresa": "Padaria Bom Trigo", "cliente": "Juliana", "vendedor": "Ana Souza"}),
    (522, {"empresa": "Ótica Visão Clara", "cliente": "Ricardo", "vendedor": "Ana Souza"}),
    (574, {"empresa": "Pet Amigo Fiel", "cliente": "Camila", "vendedor": "Bruno Lima"}),
    (627, {"empresa": "Oficina Roda Viva", "cliente": "Eduardo", "vendedor": "Carla Dias"}),
    (678, {"empresa": "Studio Bella Forma", "cliente": "Patrícia", "vendedor": "Carla Dias"}),
    (730, {"empresa": "Móveis Serra Azul", "cliente": "Fernando", "vendedor": "Diego Rocha"}),
    (783, {"empresa": "Clínica Sorriso", "cliente": "Larissa", "obs": "Indicação de parceiro"}),
    (835, {"empresa": "Ferragem Central", "cliente": "Rodrigo", "vendedor": "Carla Dias"}),
]
TAMANHO = 11  # px; altura das maiusculas no print = 8 px


def cor_de_fundo(pixels, caixa):
    """Mediana dos pixels claros da caixa: o fundo da linha, sem o texto."""
    x0, y0, x1, y1 = caixa
    claros = [pixels[x, y] for x in range(x0, x1) for y in range(y0, y1) if sum(pixels[x, y]) > 705]
    return tuple(sorted(c[i] for c in claros)[len(claros) // 2] for i in range(3))


def gerar(origem: Path, pasta_fonte: Path) -> None:
    imagem = Image.open(origem / "crm3.jpg").convert("RGB")
    desenho = ImageDraw.Draw(imagem)
    fontes = {
        "regular": ImageFont.truetype(str(pasta_fonte / "Inter-Regular.ttf"), TAMANHO),
        "medium": ImageFont.truetype(str(pasta_fonte / "Inter-Medium.ttf"), TAMANHO),
    }
    pixels = imagem.load()
    for topo, textos in LINHAS:
        for coluna, texto in textos.items():
            x0, x1, peso, cor = COLUNAS[coluna]
            caixa = (x0 - 2, topo - 4, x1, topo + 12)
            desenho.rectangle(caixa, fill=cor_de_fundo(pixels, caixa))
            # anchor "ls": x na esquerda, y na linha de base (topo das maiusculas + 8 px)
            desenho.text((x0, topo + 8), texto, font=fontes[peso], fill=cor, anchor="ls")
    imagem.save(DESTINO, quality=90)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Nomes fictícios no print de leads do CRM")
    parser.add_argument("--origem", type=Path, required=True)
    parser.add_argument("--fonte", type=Path, required=True)
    args = parser.parse_args()
    gerar(args.origem, args.fonte)
    print("gerado:", DESTINO.relative_to(RAIZ))
