export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string | null;
          driver_post_id: string;
          id: string;
          rider_id: string;
          status: Database["public"]["Enums"]["trip_status"] | null;
        };
        Insert: {
          created_at?: string | null;
          driver_post_id: string;
          id?: string;
          rider_id: string;
          status?: Database["public"]["Enums"]["trip_status"] | null;
        };
        Update: {
          created_at?: string | null;
          driver_post_id?: string;
          id?: string;
          rider_id?: string;
          status?: Database["public"]["Enums"]["trip_status"] | null;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_driver_post_id_fkey";
            columns: ["driver_post_id"];
            referencedRelation: "driver_posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "bookings_rider_id_fkey";
            columns: ["rider_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      driver_posts: {
        Row: {
          created_at: string | null;
          date: string;
          departure_id: string;
          destination_id: string;
          details: string | null;
          fee: number;
          id: string;
          seats: number;
          time: string;
          user_id: string;
          vehicle_id: string;
        };
        Insert: {
          created_at?: string | null;
          date: string;
          departure_id: string;
          destination_id: string;
          details?: string | null;
          fee: number;
          id?: string;
          seats: number;
          time: string;
          user_id: string;
          vehicle_id: string;
        };
        Update: {
          created_at?: string | null;
          date?: string;
          departure_id?: string;
          destination_id?: string;
          details?: string | null;
          fee?: number;
          id?: string;
          seats?: number;
          time?: string;
          user_id?: string;
          vehicle_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "driver_posts_departure_id_fkey";
            columns: ["departure_id"];
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "driver_posts_destination_id_fkey";
            columns: ["destination_id"];
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "driver_posts_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "driver_posts_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          },
        ];
      };
      locations: {
        Row: {
          id: string;
          location_name: string;
        };
        Insert: {
          id?: string;
          location_name: string;
        };
        Update: {
          id?: string;
          location_name?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          phone_number: string | null;
          updated_at: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          phone_number?: string | null;
          updated_at?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          phone_number?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      rider_posts: {
        Row: {
          created_at: string | null;
          date: string;
          departure_id: string;
          destination_id: string;
          details: string | null;
          id: string;
          time: string;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          date: string;
          departure_id: string;
          destination_id: string;
          details?: string | null;
          id?: string;
          time: string;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          date?: string;
          departure_id?: string;
          destination_id?: string;
          details?: string | null;
          id?: string;
          time?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "rider_posts_departure_id_fkey";
            columns: ["departure_id"];
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "rider_posts_destination_id_fkey";
            columns: ["destination_id"];
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "rider_posts_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      trips: {
        Row: {
          created_at: string | null;
          driver_id: string;
          driver_post_id: string | null;
          id: string;
          rider_id: string;
          rider_post_id: string | null;
          status: Database["public"]["Enums"]["trip_status"] | null;
        };
        Insert: {
          created_at?: string | null;
          driver_id: string;
          driver_post_id?: string | null;
          id?: string;
          rider_id: string;
          rider_post_id?: string | null;
          status?: Database["public"]["Enums"]["trip_status"] | null;
        };
        Update: {
          created_at?: string | null;
          driver_id?: string;
          driver_post_id?: string | null;
          id?: string;
          rider_id?: string;
          rider_post_id?: string | null;
          status?: Database["public"]["Enums"]["trip_status"] | null;
        };
        Relationships: [
          {
            foreignKeyName: "trips_driver_id_fkey";
            columns: ["driver_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "trips_driver_post_id_fkey";
            columns: ["driver_post_id"];
            referencedRelation: "driver_posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "trips_rider_id_fkey";
            columns: ["rider_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "trips_rider_post_id_fkey";
            columns: ["rider_post_id"];
            referencedRelation: "rider_posts";
            referencedColumns: ["id"];
          },
        ];
      };
      vehicles: {
        Row: {
          id: string;
          make_model: string;
          plate: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          make_model: string;
          plate: string;
          user_id: string;
        };
        Update: {
          id?: string;
          make_model?: string;
          plate?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "vehicles_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      trip_status: "REQUESTED" | "CONFIRMED" | "REJECTED";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey";
            columns: ["owner"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "objects_owner_fkey";
            columns: ["owner"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
