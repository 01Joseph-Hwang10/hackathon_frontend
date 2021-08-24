from notion.client import NotionClient
from constants import ROOT
import os
import json

AUTH_TOKEN = "47c02864f42e83e00cd32df449a951b8c99720bc2d1fb1f2c868427e647df4f63b41a9d1d2edf495bf1b7201023ffac87af7cae94a0bb9a8f936965c7f190c055ceeb0ce262b7c307d038f104a44"
WEIGHT_PAGE_URL = 'https://www.notion.so/c42d9c0b391b4088b4799ddc9f075d77'
TARGET_FILE = os.path.join(ROOT, 'data/question-weights.ts')

client = NotionClient(token_v2 = AUTH_TOKEN)

weight_page = client.get_block(WEIGHT_PAGE_URL)

question_type = 'ranking'

questions = []

for page_component in weight_page.children:
    if page_component.type == 'sub_header':
        if page_component.title == '랭킹형 질문':
            question_type = 'range'
            continue
    if page_component.type == 'numbered_list':
        question_choices = []
        question = {
            "title": page_component.title,
            "questionType": question_type,
            "choices": []
        }
        choice_title = ""
        for numbered_list in page_component.children:
            choice_title = choice_title.replace('선택 시 가중치', '')
            question_vars = []
            if numbered_list.type == "collection_view":
                for row in numbered_list.collection.get_rows():
                    col = list(reversed(row.get_all_properties().values()))
                    question_vars.append({
                        "title": col[0],
                        "tagTitle": col[1][0],
                        "weight": col[2]
                    })
            else:
                choice_title = numbered_list.title
                for bulleted_list in numbered_list.children:
                    for row in bulleted_list.collection.get_rows():
                        col = list(reversed(row.get_all_properties().values()))
                        question_vars.append({
                            "title": col[0],
                            "tagTitle": col[1][0],
                            "weight": col[2]
                        })
            choice = {
                "title": choice_title,
                "vars": []
            }
            if len(question_vars) != 0:
                choice['vars'] = question_vars
                question_choices.append(choice)
        question['choices'] = question_choices
        questions.append(question)

with open(TARGET_FILE, 'w') as wf:
    wf.write('/* eslint-disable */\n')
    wf.write('export default ')
    wf.write(json.dumps(questions, indent=2))
