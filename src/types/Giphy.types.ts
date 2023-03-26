export interface GiphyType {
  results: Result[];
  next:    string;
  error?: {
    code: number 
  }
}

export interface Result {
  id:                  string;
  title:               string;
  media_formats:       MediaFormats;
  created:             number;
  content_description: string;
  itemurl:             string;
  url:                 string;
  tags:                string[];
  flags:               any[];
  hasaudio:            boolean;
}

export interface MediaFormats {
  gif: GIF;
}

export interface GIF {
  url:      string;
  duration: number;
  preview:  string;
  dims:     number[];
  size:     number;
}
