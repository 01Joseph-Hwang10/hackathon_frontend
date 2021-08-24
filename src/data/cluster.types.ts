import { TTVTags } from "./travel-tendency-vars.types";

type ClusterCenter = Record<TTVTags, string>

export type ClusterType = 'k-means' | 'gmm'

export interface Cluster {
    type: ClusterType;
    center: ClusterCenter;
    clusterLabel: string;
    title: string;
    description: string;
}
