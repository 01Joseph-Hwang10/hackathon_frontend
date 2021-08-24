import csv
from constants import ROOT
from functions import indent
import os
import json

def to_lowercase(string):
    return ''.join([string[:1].lower(), string[1:]])

range_dataset_detail_path = os.path.join(ROOT, 'data/range-dataset-detail.csv')
range_dataset_group_path = os.path.join(ROOT, 'data/range-dataset-group.csv')
ranking_dataset_detail_path = os.path.join(ROOT, 'data/ranking-dataset-detail.csv')
ranking_dataset_group_path = os.path.join(ROOT, 'data/ranking-dataset-group.csv')
target_path = os.path.join(ROOT, 'src/data/dataset.ts')

codelines = [
    'import { MinMaxRow } from "./dataset.types"',
    '',
    '',
]

paths = [
    range_dataset_detail_path, 
    range_dataset_group_path, 
    ranking_dataset_detail_path, 
    ranking_dataset_group_path
]

for path in paths:
    with open(path, 'r') as csvfile:
        reader = csv.reader(csvfile)
        header = next(reader)
        codelines.append('export const %s: MinMaxRow[] = [' % to_lowercase(''.join([word.capitalize() for word in path.split('/')[-1].split('.')[0].split('-')])))
        for row in reader:
            codelines.append(indent('["%s", %s, %s, %s],' % (row[0], row[1], row[2], row[3]), 2))
        codelines.append('];')
        codelines.append('')

with open(target_path, 'w') as wf:
    wf.write('\n'.join(codelines))