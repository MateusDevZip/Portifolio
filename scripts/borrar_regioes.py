"""
Borra regioes de prints que mostram dados reais (nomes de clientes, numeros de
negocio, dados de pagamento), mantendo a tela reconhecivel.

Uso:
    python scripts/borrar_regioes.py --origem PASTA_COM_OS_ORIGINAIS

Le cada imagem ORIGINAL (sem borrao) pelo nome de arquivo em --origem e grava a
versao borrada no caminho do site. Assim, rodar de novo nunca borra duas vezes.
Os originais ficam fora do repositorio. As regioes sao fracoes (x0, y0, x1, y1)
da largura e da altura de cada imagem.
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

RAIZ = Path(__file__).resolve().parent.parent
REGIOES = {
    # Visao Geral: os seis numeros dos cartoes
    "public/projects/crmontesite/crm1.jpg": [
        (0.32, 0.71, 0.40, 0.80), (0.545, 0.71, 0.615, 0.80), (0.745, 0.71, 0.83, 0.80),
        (0.32, 0.87, 0.40, 0.96), (0.545, 0.87, 0.615, 0.96), (0.745, 0.87, 0.83, 0.96),
    ],
    # Kanban: contagem de cada coluna e todo o conteudo dos cartoes (clientes, responsaveis, dominios)
    "public/projects/crmontesite/crm2.jpg": [
        (0.20, 0.165, 0.25, 0.205), (0.45, 0.165, 0.50, 0.205), (0.70, 0.165, 0.745, 0.205),
        (0.94, 0.165, 0.99, 0.205), (0.0, 0.20, 1.0, 1.0),
    ],
    # Leads: numeros do topo, total encontrado e o corpo da tabela
    "public/projects/crmontesite/crm3.jpg": [(0.0, 0.165, 1.0, 0.26), (0.0, 0.425, 0.32, 0.475), (0.0, 0.50, 1.0, 1.0)],
    # Layouts: contadores do topo, total de registros e a coluna Projeto (nomes de clientes)
    "public/projects/gestaolayoutssheets/layout1.jpg": [
        (0.0, 0.23, 1.0, 0.35), (0.85, 0.37, 1.0, 0.42), (0.10, 0.47, 0.26, 1.0),
    ],
    # Checkout: a linha do cartao salvo
    "public/projects/certificadopj/certificado2.jpg": [(0.58, 0.53, 0.95, 0.615)],
}


def borrar(origem: Path, destino: Path, regioes) -> None:
    imagem = Image.open(origem).convert("RGB")
    largura, altura = imagem.size
    for x0, y0, x1, y1 in regioes:
        caixa = (int(x0 * largura), int(y0 * altura), int(x1 * largura), int(y1 * altura))
        trecho = imagem.crop(caixa).filter(ImageFilter.GaussianBlur(radius=14))
        imagem.paste(trecho, caixa[:2])
        camada = Image.new("RGBA", imagem.size, (0, 0, 0, 0))
        ImageDraw.Draw(camada).rectangle(caixa, fill=(120, 120, 120, 70))
        imagem = Image.alpha_composite(imagem.convert("RGBA"), camada).convert("RGB")
    imagem.save(destino, quality=88)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Borra dados reais nos prints do portfólio")
    parser.add_argument("--origem", type=Path, required=True, help="pasta com as imagens originais, sem borrão")
    args = parser.parse_args()
    for relativo, regioes in REGIOES.items():
        original = args.origem / Path(relativo).name
        if not original.is_file():
            raise SystemExit(f"original não encontrado: {original}")
        borrar(original, RAIZ / relativo, regioes)
        print("borrado:", relativo)
