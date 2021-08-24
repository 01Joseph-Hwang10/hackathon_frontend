from constants import ROOT
from functions import indent, to_camel_case
import os
import csv
import json

LABEL = 0
SENSITIVE = 1
UNPREPARED = 2
MEDIA_SHARING = 3
CHALLENGE = 4
FLEX = 5
QUICK = 6

kmeans_source = os.path.join(ROOT, 'data/k-means.csv')
kmeans_path = os.path.join(ROOT, 'src/data/k-means.ts')

gmm_source = os.path.join(ROOT, 'data/gmm.csv')
gmm_path = os.path.join(ROOT, 'src/data/gmm.ts')

for source, path, type in zip([kmeans_source, gmm_source], [kmeans_path, gmm_path], ['k-means', 'gmm']):
    codelines = [
        'import { Cluster } from "./cluster.types";'
        '',
    ]
    with open(source, 'r') as csvfile:
        reader = csv.reader(csvfile)
        header = next(reader)
        clusters = []
        for row in reader:
            cluster = {
                "type": type,
                'title': '',
                'description': '',
            }
            center = {
                to_camel_case(header[SENSITIVE]): row[SENSITIVE],
                to_camel_case(header[UNPREPARED]): row[UNPREPARED],
                to_camel_case(header[MEDIA_SHARING]): row[MEDIA_SHARING],
                to_camel_case(header[CHALLENGE]): row[CHALLENGE],
                to_camel_case(header[FLEX]): row[FLEX],
                to_camel_case(header[QUICK]): row[QUICK],
            }
            cluster['center'] = center
            cluster['clusterLabel'] = row[LABEL]
            clusters.append(cluster)
        codelines.append('export const %sClusters: Cluster[] =' % to_camel_case(type))
        codelines = codelines + json.dumps(clusters, indent=2).split('\n')
        codelines.append('')
    with open(path, 'w') as wf:
        wf.write('\n'.join(codelines))


        
            
