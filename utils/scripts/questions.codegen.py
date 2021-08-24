from notion.client import NotionClient
from constants import ROOT
import os
import json
import re
from tqdm import tqdm

AUTH_TOKEN = "47c02864f42e83e00cd32df449a951b8c99720bc2d1fb1f2c868427e647df4f63b41a9d1d2edf495bf1b7201023ffac87af7cae94a0bb9a8f936965c7f190c055ceeb0ce262b7c307d038f104a44"
WEIGHT_PAGE_URL = 'https://www.notion.so/6b6ab208a63944ad93e55dd125bb615c'
TARGET_FILE = os.path.join(ROOT, 'data/question-weights.ts')

client = NotionClient(token_v2 = AUTH_TOKEN)

weight_page = client.get_block(WEIGHT_PAGE_URL)

question_type = 'ranking'

questions = []

for page_component in tqdm(weight_page.children, desc="crawl progressing..."):
    if page_component.type == 'sub_header':
        if page_component.title == '랭킹형 질문':
            question_type = 'range'
            continue
    if page_component.type == 'numbered_list':
        question_choices = []
        page_title = page_component.title
        num_choices = 1
        regex = re.compile(r'\[.*([0-9])+.*\]').search(page_title)
        if regex != None:
            question_type = 'ranking'
            str_line = regex.group()
            num_choices = int(regex.group(1))
            page_title = page_title.replace(str_line, '')
        else:
            question_type = 'range'
        page_title = page_title.replace('|enter|','\n')
        question = {
            "title": page_title,
            "questionType": question_type,
            "choices": [],
            "numChoices": num_choices
        }
        choice_title = ""
        for child in page_component.children:
            choice_title = choice_title.replace('선택 시 가중치', '')
            question_vars = []
            if child.type == "collection_view":
                for row in child.collection.get_rows():
                    col = list(reversed(row.get_all_properties().values()))
                    question_vars.append({
                        "title": col[0],
                        "tagTitle": col[1],
                        "weight": col[2]
                    })
            if child.type == 'bulleted_list':
                choice_title = child.title
                for text_or_collection_view in child.children:
                    if text_or_collection_view.type != "collection_view":
                        continue
                    for row in text_or_collection_view.collection.get_rows():
                        col = list(filter(lambda e: len(e) > 0, list(reversed(row.get_all_properties().values()))))
                        if len(col) == 4:
                            col = [col[0], col[2], col[3]]
                        question_vars.append({
                            "title": col[0],
                            "tagTitle": col[1],
                            "weight": col[2]
                        })
            choice_title = choice_title.replace('|enter|', '\n')
            if child.type not in ['collection_view', 'bulleted_list']:
                continue
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
