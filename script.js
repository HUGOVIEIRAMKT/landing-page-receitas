// Incluindo o conteúdo do JSON diretamente no script
const data = {
  "version": "0.4",
  "title": "modelo Modelo Página de Vendas Receitas para Emagrecer",
  "type": "page",
  "content": [
    {
      "id": "5539b5d",
      "settings": { "layout": "full_width" },
      "elements": [
        {
          "id": "35f6ecde",
          "settings": {
            "_column_size": 100,
            "_inline_size": 100,
            "background_background": "gradient",
            "background_color": "#FF2198",
            "background_color_b": "#5A0C36",
            "border_width": {
              "unit": "px",
              "top": "0",
              "right": "0",
              "bottom": "5",
              "left": "0",
              "isLinked": false
            },
            "border_color": "#FFFFFF",
            "box_shadow_box_shadow_type": "yes",
            "box_shadow_box_shadow": {
              "horizontal": -100,
              "vertical": -100,
              "blur": 10,
              "spread": -100,
              "color": "rgba(0,0,0,0.5)"
            },
            "background_color_b_stop": { "unit": "%", "size": 91, "sizes": [] },
            "background_gradient_angle": { "unit": "deg", "size": 220, "sizes": [] },
            "background_overlay_background": "classic",
            "background_overlay_image": {
              "id": 386,
              "url": "https://pvebooksplrs.paginadevenda.com/wp-content/uploads/2020/09/fractals-1-1.jpg"
            },
            "overlay_blend_mode": "multiply"
          },
          "elements": [
            {
              "id": "13db20cf",
              "settings": {
                "image": {
                  "id": 385,
                  "url": "https://pvebooksplrs.paginadevenda.com/wp-content/uploads/2020/09/logo-1.png"
                },
                "align": "center",
                "_margin": {
                  "unit": "px",
                  "top": "0",
                  "right": "0",
                  "bottom": "-55",
                  "left": "0",
                  "isLinked": false
                },
                "_padding": {
                  "unit": "px",
                  "top": "0",
                  "right": "0",
                  "bottom": "0",
                  "left": "0",
                  "isLinked": false
                }
              },
              "elements": [],
              "isInner": false,
              "widgetType": "image",
              "elType": "widget"
            },
            {
              "id": "437b62b5",
              "settings": {
                "title": "PERCA ATÉ 4 KILOS EM POUCAS SEMANAS COM 300 RECEITES DELICIOSAS PARA EMAGRECER.",
                "align": "center",
                "title_color": "#FFFFFF",
                "typography_typography": "custom",
                "typography_font_family": "Open Sans",
                "typography_font_size": { "unit": "px", "size": 29, "sizes": [] },
                "typography_font_weight": "700",
                "typography_line_height": { "unit": "em", "size": 1.3, "sizes": [] },
                "typography_letter_spacing": { "unit": "px", "size": -1.1, "sizes": [] },
                "_margin": { "unit": "px", "top": "0", "right": "0", "bottom": "-17", "left": "0", "isLinked": false }
              },
              "elements": [],
              "isInner": false,
              "widgetType": "heading",
              "elType": "widget"
            },
            // Continue adicionando os elementos do JSON aqui...
          ],
          "isInner": false,
          "elType": "column"
        }
      ],
      "isInner": false,
      "elType": "section"
    }
    // Continue adicionando as seções do JSON aqui...
  ]
};

const container = document.getElementById('landing-page-container');

// Função para criar elementos baseados no conteúdo do JSON
data.content.forEach(section => {
  const sectionElement = document.createElement('section');
  section.elements.forEach(element => {
    const elementDiv = document.createElement('div');

    // Exemplo de uso do tipo de elemento para adicionar conteúdo
    if (element.widgetType === 'heading') {
      const heading = document.createElement('h1');
      heading.textContent = element.settings.title;
      heading.style.color = element.settings.title_color;
      heading.style.textAlign = element.settings.align;
      elementDiv.appendChild(heading);
    } else if (element.widgetType === 'text-editor') {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = element.settings.editor;
      paragraph.style.color = element.settings.text_color;
      elementDiv.appendChild(paragraph);
    } else if (element.widgetType === 'image') {
      const img = document.createElement('img');
      img.src = element.settings.image.url;
      elementDiv.appendChild(img);
    } else if (element.widgetType === 'button') {
      const button = document.createElement('button');
      button.textContent = element.settings.text;
      button.style.backgroundColor = element.settings.background_color;
      button.style.color = element.settings.button_text_color;
      elementDiv.appendChild(button);
    }

    sectionElement.appendChild(elementDiv);
  });
  container.appendChild(sectionElement);
});
